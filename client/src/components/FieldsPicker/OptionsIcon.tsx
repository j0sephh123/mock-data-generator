import { ActionIcon } from "@mantine/core";
import { Settings } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function OptionsIcon({ onClick }: Props) {
  return (
    <ActionIcon onClick={onClick} color="gray" variant="subtle">
      <Settings />
    </ActionIcon>
  );
}
