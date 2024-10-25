import { Tooltip, ActionIcon } from "@mantine/core";
import { FileJson } from "lucide-react";
import download from "../utils/download";

interface JsonDownloadButtonProps<T> {
  data: T;
  filename?: string;
}

const JsonDownloadButton = <T,>({
  data,
  filename = "data.json",
}: JsonDownloadButtonProps<T>) => {
  const handleDownload = () => {
    download(data, filename, false);
  };

  return (
    <Tooltip label="Download JSON" withArrow position="bottom">
      <ActionIcon
        onClick={handleDownload}
        variant="light"
        color="blue"
        size="md"
        radius="md"
      >
        <FileJson strokeWidth={1.5} />
      </ActionIcon>
    </Tooltip>
  );
};

export default JsonDownloadButton;
