import { Modal } from "@mantine/core";
import { PropsWithChildren } from "react";

type Props = {
  code: string | null;
  setCode: (code: string | null) => void;
  totalRows: number;
} & PropsWithChildren;

export default function ModalWrapper({
  code,
  setCode,
  totalRows,
  children,
}: Props) {
  return (
    <Modal.Root size="xl" opened={!!code} onClose={() => setCode(null)}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>{`Preview ${totalRows} rows`}</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
