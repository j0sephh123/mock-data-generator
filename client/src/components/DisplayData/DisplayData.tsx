import { CodeHighlight } from "@mantine/code-highlight";
import ModalWrapper from "./ModalWrapper";
import Controls from "./Controls";

type Props = {
  code: string | null;
  setCode: (code: string | null) => void;
  totalRows: number;
  setTotalRows: (rows: number) => void;
};

export default function DisplayData({
  setTotalRows,
  code,
  setCode,
  totalRows,
}: Props) {
  return (
    <ModalWrapper code={code} setCode={setCode} totalRows={totalRows}>
      <Controls
        code={code}
        totalRows={totalRows}
        setTotalRows={setTotalRows}
      />
      <CodeHighlight
        code={code ?? ""}
        language="json"
        copyLabel="Copy"
        copiedLabel="Copied!"
      />
    </ModalWrapper>
  );
}
