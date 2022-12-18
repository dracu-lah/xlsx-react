import { useEffect, useState } from "react";
import { ExportToExcel } from "./ExcelFile";
function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
      });
  }, []);
  return (
    <>
      <ExportToExcel ud={userData} />
    </>
  );
}

export default App;
