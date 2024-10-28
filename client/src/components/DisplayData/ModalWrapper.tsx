import { Modal } from "@mantine/core";
import { PropsWithChildren } from "react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  title: string;
} & PropsWithChildren;

export default function ModalWrapper({
  children,
  isOpen,
  onClose,
  title,
}: Props) {
  return (
    <Modal.Root size="xl" opened={isOpen} onClose={onClose}>
      <Modal.Overlay />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
}
