import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);

// Função para criar um novo documento na coleção
const createDocument = async (leadNome, leadNumero, leadAcumulaMilhas) => {
  const docRef = await addDoc(collection(db, "UserAnswers"), {
    leadNome,
    leadNumero,
    leadAcumulaMilhas,
  });
  return docRef.id;
};
export default createDocument;
