import { CodeHighlight } from "@mantine/code-highlight";
import ModalWrapper from "./ModalWrapper";
import Controls from "./Controls";
import { useSnapshot } from "valtio";
import { selectTotalRows, selectCode } from "../../store/fields/derived";
import { fieldsActions } from "../../store/fields/actions";

export default function DisplayData() {
  const { totalRows } = useSnapshot(selectTotalRows);
  const { code } = useSnapshot(selectCode);

  return (
    <ModalWrapper
      code={code}
      setCode={fieldsActions.setCode}
      totalRows={totalRows}
    >
      <Controls code={code} />
      <CodeHighlight
        code={code ?? ""}
        language="json"
        copyLabel="Copy"
        copiedLabel="Copied!"
      />
    </ModalWrapper>
  );
}
