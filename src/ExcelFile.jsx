import * as FileSaver from "file-saver";

import * as XLSX from "xlsx";

export const ExportToExcel = ({ ud }) => {
  const fileType = "xlsx";
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(ud);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    // Binary large object (Blob) handles large objects
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "myfile.xlsx");
  };
  return (
    <>
      <button onClick={exportToCSV}>Download File</button>
    </>
  );
};
