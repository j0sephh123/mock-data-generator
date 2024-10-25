import { CodeHighlight } from "@mantine/code-highlight";
import ModalWrapper from "./ModalWrapper";
import Controls from "./Controls";

type Props = {
  code: string | null;
  setCode: (code: string | null) => void;
  totalRows: number;
  setTotalRows: (rows: number) => void;
  handlePreviewData: () => void;
};

export default function DisplayData({
  handlePreviewData,
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
        handlePreviewData={handlePreviewData}
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
