import { Tooltip, ActionIcon, Group } from "@mantine/core";
import JsonDownloadButton from "../JsonDownloadButton";
import { RotateCw } from "lucide-react";
import TotalRowsInput from "../TotalRowsInput";
import useGenerate from "../../hooks/useGenerate";

type Props = {
  code: string | null;
};

export default function Controls({ code }: Props) {
  const handleGenerate = useGenerate();

  return (
    <Group justify="space-between">
      <TotalRowsInput />
      <Group pb="sm" gap="xs" justify="right">
        <JsonDownloadButton data={code} />
        <Tooltip label="Regenerate Data" withArrow position="bottom">
          <ActionIcon
            onClick={handleGenerate}
            variant="light"
            color="green"
            size="md"
            radius="md"
          >
            <RotateCw strokeWidth={1.5} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Group>
  );
}
