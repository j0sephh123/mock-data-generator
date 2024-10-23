import { useState } from "react";
import { useGenerateData } from "./services/useGenerateData";

const defaultNumberOfRows = 10;

export default function App() {
  const [totalRows, setTotalRows] = useState(defaultNumberOfRows);
  const handleGenerateData = useGenerateData();
  const handlePreviewData = () => {
    console.log("todo");
  };

  return (
    <>
      <input
        onChange={(e) => setTotalRows(Number(e.target.value))}
        type="number"
        min={1}
        max={100}
        value={totalRows}
      />
      <button onClick={() => handlePreviewData()}>Preview Data</button>
      <button
        onClick={() =>
          handleGenerateData({
            totalRows,
            fields: [
              { name: "name", fieldType: "firstName" },
              { name: "name", fieldType: "fullName" },
              { name: "name", fieldType: "lastName" },
            ],
          })
        }
      >
        Generate Data
      </button>
    </>
  );
}
