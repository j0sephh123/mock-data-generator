/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, Tooltip } from "@mantine/core";
import generateData from "./utils/generateData";
import DisplayData from "./components/DisplayData/DisplayData";
import TotalRowsInput from "./components/TotalRowsInput";
import { ConditionalWrapper } from "./components/ConditionalWrapper";
import TheLayout from "./components/TheLayout";
import FieldsPicker from "./components/FieldsPicker/FieldsPicker";
import { useSnapshot } from "valtio";
import { fieldsProxy, storeProxy } from "./store/store";


export default function App() {
  const { fields } = useSnapshot(fieldsProxy);
  const stateSnapshot = useSnapshot(storeProxy);

  const handlePreviewData = () => {
    generateData({
      totalRows: stateSnapshot.totalRows,
      fields: fields.map(({ id, ...rest }) => ({ ...rest })),
    }).then((data) => {
      storeProxy.code = JSON.stringify(data, null, 2);
    });
  };

  const isDisabled = fields.length < 1;

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
      <FieldsPicker />
      <TotalRowsInput
        totalRows={stateSnapshot.totalRows}
        setTotalRows={(rows) => {
          storeProxy.totalRows = rows;
        }}
      />
      <DisplayData
        code={stateSnapshot.code}
        setCode={(newCode) => {
          storeProxy.code = newCode;
        }}
        totalRows={stateSnapshot.totalRows}
        setTotalRows={(rows) => {
          storeProxy.totalRows = rows;
        }}
        handlePreviewData={handlePreviewData}
      />
    </TheLayout>
  );
}
