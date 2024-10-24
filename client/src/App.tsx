import { useCallback, useState } from "react";
import { useGenerateData } from "./services/useGenerateData";
import JsonDownloadButton from "./components/JsonDownloadButton";
import Select from "./components/Select/Select";
import FieldRow from "./components/FieldRow/FieldRow";
import { Button } from "@mantine/core";
import { Plus } from "lucide-react";
import generateId from "./utils/generateId";

const defaultNumberOfRows = 10;

const MAX_FIELDS = 10;

export default function App() {
  const [totalRows, setTotalRows] = useState(defaultNumberOfRows);
  const handleGenerateData = useGenerateData();

  const [renderedFields, setRenderedFields] = useState<
    {
      id: string;
      name: string;
      fieldType: "firstName" | "fullName" | "lastName";
    }[]
  >([
    {
      id: generateId(),
      name: "first_name",
      fieldType: "firstName",
    },
    {
      id: generateId(),
      name: "full_name",
      fieldType: "fullName",
    },
    {
      id: generateId(),
      name: "last_name",
      fieldType: "lastName",
    },
  ]);

  const handleAddField = useCallback(() => {
    setRenderedFields((fields) => [
      ...fields,
      {
        id: generateId(),
        name:
          renderedFields.length > 0
            ? renderedFields[renderedFields.length - 1]["name"]
            : "first_name",
        fieldType:
          renderedFields.length > 0
            ? renderedFields[renderedFields.length - 1]["fieldType"]
            : "firstName",
      },
    ]);
  }, [renderedFields]);

  const handlePreviewData = () => {
    console.log("handlePreviewData");
  };

  return (
    <>
      <div>
        todo
        {renderedFields.map(({ fieldType, id, name }) => (
          <FieldRow
            name={name}
            type={fieldType}
            key={id}
            id={id}
            onRemove={(id) => {
              setRenderedFields((fields) =>
                fields.filter((field) => field.id !== id)
              );
            }}
          />
        ))}
        {renderedFields.length < MAX_FIELDS && (
          <Button
            onClick={handleAddField}
            color="gray"
            leftSection={<Plus />}
          >
            ADD ANOTHER FIELD
          </Button>
        )}
      </div>
      <div>
        configurations{" "}
        <input
          onChange={(e) => setTotalRows(Number(e.target.value))}
          type="number"
          min={1}
          max={100}
          value={totalRows}
        />
      </div>
      <div>
        <button onClick={() => handlePreviewData()}>Preview Data</button>
        <button
          onClick={() =>
            handleGenerateData({
              totalRows,
              fields: renderedFields,
            }).then((data) => {
              console.log(data);
            })
          }
        >
          Generate Data
        </button>
        <div
          style={{
            display: "flex",
          }}
        ></div>
        <Select />
        <JsonDownloadButton data={{ a: 5 }} />
      </div>
    </>
  );
}
