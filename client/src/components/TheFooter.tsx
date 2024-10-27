import { Tooltip, Button } from "@mantine/core";
import { ConditionalWrapper } from "./ConditionalWrapper";
import useGenerate from "../hooks/useGenerate";
import { useSnapshot } from "valtio";
import { selectFields } from "../store/fields/derived";

export default function TheFooter() {
  const handleGenerate = useGenerate();
  const { areFieldsDisabled } = useSnapshot(selectFields);

  return (
    <ConditionalWrapper
      condition={areFieldsDisabled}
      wrapper={(children) => (
        <Tooltip label="Need to have at least 1 field to generate">
          {children}
        </Tooltip>
      )}
    >
      <Button
        disabled={areFieldsDisabled}
        color="violet"
        onClick={handleGenerate}
      >
        Generate
      </Button>
    </ConditionalWrapper>
  );
}
