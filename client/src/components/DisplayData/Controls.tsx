import { Tooltip, ActionIcon, Group } from "@mantine/core";
import JsonDownloadButton from "../JsonDownloadButton";
import { RotateCw } from "lucide-react";
import TotalRowsInput from "../TotalRowsInput";

type Props = {
  code: string | null;
  totalRows: number;
  setTotalRows: (rows: number) => void;
  handlePreviewData: () => void;
};

export default function Controls({
  code,
  totalRows,
  setTotalRows,
  handlePreviewData,
}: Props) {
  return (
    <Group justify="space-between">
      <TotalRowsInput totalRows={totalRows} setTotalRows={setTotalRows} />
      <Group pb="sm" gap="xs" justify="right">
        <JsonDownloadButton data={code} />
        <Tooltip label="Regenerate Data" withArrow position="bottom">
          <ActionIcon
            onClick={handlePreviewData}
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
