import { NumberInput } from "@mantine/core";
import { useSnapshot } from "valtio";
import { selectTotalRows } from "../store/fields/derived";
import { fieldsActions } from "../store/fields/actions";

export default function TotalRowsInput() {
  const { totalRows } = useSnapshot(selectTotalRows);

  return (
    <NumberInput
      label="Total Rows"
      w={200}
      min={0}
      max={100}
      value={totalRows}
      onChange={(value) => fieldsActions.setTotalRows(Number(value))}
    />
  );
}
