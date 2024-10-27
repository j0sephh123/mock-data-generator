import { useSnapshot } from "valtio";
import DisplayData from "./components/DisplayData/DisplayData";
import TotalRowsInput from "./components/TotalRowsInput";
import TheLayout from "./components/TheLayout";
import FieldsPicker from "./components/FieldsPicker/FieldsPicker";
import { fieldsProxy } from "./store/fields/store";
import {
  selectCode, selectTotalRows
} from "./store/fields/derived";
import TheFooter from "./components/TheFooter";

export default function App() {

  const { totalRows } = useSnapshot(selectTotalRows);
  const { code } = useSnapshot(selectCode);

  return (
    <TheLayout footerSlot={<TheFooter />} headerSlot={<div>Logo</div>}>
      <FieldsPicker />
      <TotalRowsInput
        totalRows={totalRows}
        setTotalRows={(rows) => {
          fieldsProxy.totalRows = rows;
        }}
      />
      <DisplayData
        code={code}
        setCode={(newCode) => {
          fieldsProxy.code = newCode;
        }}
        totalRows={totalRows}
        setTotalRows={(rows) => {
          fieldsProxy.totalRows = rows;
        }}
      />
    </TheLayout>
  );
}
