import { Draggable } from "@hello-pangea/dnd";
import { ActionIcon, Group } from "@mantine/core";
import { GripVertical } from "lucide-react";

type Props = {
  id: string;
  index: number;
  children: React.ReactNode;
};

export default function DraggableWrapper({ id, index, children }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {({ dragHandleProps, innerRef: draggableInnerRef, draggableProps }) => (
        <Group ref={draggableInnerRef} {...draggableProps} pb="xs">
          <div {...dragHandleProps}>
            <ActionIcon color="gray" variant="subtle">
              <GripVertical />
            </ActionIcon>
          </div>
          {children}
        </Group>
      )}
    </Draggable>
  );
}
