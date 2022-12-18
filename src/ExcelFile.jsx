import * as FileSaver from "file-saver";

import * as XLSX from "xlsx";

export const ExportToExcel = ({ userDetail }) => {
  console.log(userDetail)
  const fileType = "xlsx";
  const exportToCSV = () => {
    const ws = XLSX.utils.json_to_sheet(userDetail);
    const wb = { Sheets: { product: ws }, SheetName: ["product"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    // Binary large object (Blob) handles large objects
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "myfile" + ".xlsx");
  };
  return <><button onClick={exportToCSV}>Download File</button></>;
};
