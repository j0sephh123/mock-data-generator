import { useCallback, useState } from "react";
import { Button, Tooltip } from "@mantine/core";
import generateId from "./utils/generateId";
import generateData from "./utils/generateData";
import DisplayData from "./components/DisplayData/DisplayData";
import TotalRowsInput from "./components/TotalRowsInput";
import { ConditionalWrapper } from "./components/ConditionalWrapper";
import TheLayout from "./components/TheLayout";
import FieldsPicker from "./components/FieldsPicker/FieldsPicker";

const defaultNumberOfRows = 10;

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

  const isDisabled = renderedFields.length < 1;

  return (
    <TheLayout
      footerSlot={
        <ConditionalWrapper
          condition={isDisabled}
          wrapper={(children) => (
            <Tooltip label="Need to have at least 1 field to generate">
              {children}
            </Tooltip>
          )}
        >
          <Button
            disabled={isDisabled}
            color="violet"
            onClick={() => handlePreviewData()}
          >
            Generate
          </Button>
        </ConditionalWrapper>
      }
      headerSlot={<div>Logo</div>}
    >
      <FieldsPicker
        renderedFields={renderedFields}
        setRenderedFields={setRenderedFields}
        handleAddField={handleAddField}
      />
      <TotalRowsInput totalRows={totalRows} setTotalRows={setTotalRows} />
      <DisplayData
        code={code}
        setCode={setCode}
        totalRows={totalRows}
        setTotalRows={setTotalRows}
        handlePreviewData={handlePreviewData}
      />
    </TheLayout>
  );
}
