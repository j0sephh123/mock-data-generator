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

  return <button onClick={handleDownload}>Download JSON</button>;
};

export default JsonDownloadButton;
