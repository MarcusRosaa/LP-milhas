/* eslint-disable no-shadow */
// AuthContext.js
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";

export const AuthContext = createContext<{
  user: User | null;
  loading: boolean;
} | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authValue = useMemo(() => ({ user, loading }), [user, loading]);

  return (
    <AuthContext.Provider value={authValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
