import React, { useEffect, useState } from "react";
import { ExportToExcel } from "./ExcelFile";
function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUserData(json);
        // console.log("json", json);
      });
  }, []);
  
  return (
    <>
      <ExportToExcel userDetail={userData} />
    </>
  );
}

export default App;
