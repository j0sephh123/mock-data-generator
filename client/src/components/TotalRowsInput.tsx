import { NumberInput } from "@mantine/core";

export default function TotalRowsInput({
  totalRows,
  setTotalRows,
}: {
  totalRows: number;
  setTotalRows: (rows: number) => void;
}) {
  return (
    <NumberInput
      label="Total Rows"
      w={200}
      min={0}
      max={100}
      value={totalRows}
      onChange={(value) => setTotalRows(Number(value))}
    />
  );
}
