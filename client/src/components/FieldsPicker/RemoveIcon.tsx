import { ActionIcon } from "@mantine/core";
import { X } from "lucide-react";

type Props = {
  onClick: () => void;
};

export default function RemoveIcon({ onClick }: Props) {
  return (
    <ActionIcon onClick={onClick} color="gray" variant="subtle">
      <X />
    </ActionIcon>
  );
}
