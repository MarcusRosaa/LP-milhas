/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
// Dashboard.js
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "firebase/auth";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { saveAs } from "file-saver";
import { logout } from "../../firebase/Auth";
import { AuthContext } from "../../context/AuthContext";
import Container from "./styles";
import { app } from "../../firebase/firebase";

const Dashboard = () => {
  const db = getFirestore(app);

  const { user } = useContext(AuthContext) as {
    user: User | null;
    loading: boolean;
  };
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    navigate("/login");
  }

  const handleDownload = async () => {
    // Fetch the UserAnswers collection from Firestore
    const userAnswersRef = collection(db, "UserAnswers");
    const querySnapshot = await getDocs(userAnswersRef);
    const userAnswersData: [string, string, string][] = [];

    // Iterate through the documents and extract the fields
    querySnapshot.forEach((doc) => {
      const { leadAcumulaMilhas, leadNome, leadNumero } = doc.data();
      userAnswersData.push([leadAcumulaMilhas, leadNome, leadNumero]);
    });

    // Create the workbook and worksheet
    const XLSX = require("xlsx");
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet([
      ["leadAcumulaMilhas", "leadNome", "leadNumero"],
      ...userAnswersData,
    ]);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "UserAnswers");

    // Generate the Excel file
    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const excelData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Save the Excel file
    saveAs(excelData, "UserAnswers.xlsx");
  };

  return (
    <Container>
      <h2>Dashboard</h2>
      <button onClick={handleDownload} type="button">
        Fazer download
      </button>
      <button onClick={handleLogout} type="button">
        Sair
      </button>
    </Container>
  );
};

export default Dashboard;
