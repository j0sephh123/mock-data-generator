import { ActionIcon, ActionIconProps } from "@mantine/core";
import { X } from "lucide-react";

type Props = {
  onClick: () => void;
  actionIconProps?: ActionIconProps;
};

export default function RemoveIcon({ onClick, actionIconProps }: Props) {
  return (
    <ActionIcon
      onClick={onClick}
      color="gray"
      variant="subtle"
      {...actionIconProps}
    >
      <X />
    </ActionIcon>
  );
}
