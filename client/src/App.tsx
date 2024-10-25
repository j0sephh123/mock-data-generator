import { useCallback, useState } from "react";
import FieldRow from "./components/FieldRow/FieldRow";
import { AppShell, Button } from "@mantine/core";
import { Plus } from "lucide-react";
import generateId from "./utils/generateId";
import generateData from "./utils/generateData";
import DisplayData from "./components/DisplayData/DisplayData";
import TotalRowsInput from "./components/TotalRowsInput";

const defaultNumberOfRows = 10;

const MAX_FIELDS = 10;

export default function App() {
  const [code, setCode] = useState<string | null>(null);
  const [totalRows, setTotalRows] = useState(defaultNumberOfRows);

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
    generateData({
      totalRows,
      fields: renderedFields,
    }).then((data) => {
      setCode(JSON.stringify(data, null, 2));
    });
  };

  return (
    <>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header>
          <div>Logo</div>
        </AppShell.Header>
        <AppShell.Main>
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
              Add Another Field
            </Button>
          )}
          <TotalRowsInput totalRows={totalRows} setTotalRows={setTotalRows} />
          <DisplayData
            code={code}
            setCode={setCode}
            totalRows={totalRows}
            setTotalRows={setTotalRows}
            handlePreviewData={handlePreviewData}
          />
        </AppShell.Main>
        <AppShell.Footer p="md">
          <Button color="violet" onClick={() => handlePreviewData()}>
            Generate
          </Button>
        </AppShell.Footer>
      </AppShell>
    </>
  );
}
