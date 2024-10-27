import { ActionIcon, Group, Select, TextInput } from "@mantine/core";
import { GripVertical, X } from "lucide-react";
import { FieldTypeI } from "../../schemas";
import { fieldsActions } from "../../store/fields/actions";
import { Draggable } from "@hello-pangea/dnd";

const data: {
  label: string;
  value: FieldTypeI;
}[] = [
  { label: "First Name", value: "firstName" },
  { label: "Last Name", value: "lastName" },
  { label: "Full Name", value: "fullName" },
] as const;

type Props = {
  id: string;
  fieldType: FieldTypeI;
  name: string;
  index: number;
};

export default function FieldRow({ name, fieldType, id, index }: Props) {
  return (
    <Draggable draggableId={id} index={index}>
      {({ dragHandleProps, innerRef: draggableInnerRef, draggableProps }) => (
        <Group ref={draggableInnerRef} {...draggableProps} pb="xs">
          <div {...dragHandleProps}>
            <ActionIcon color="gray" variant="subtle">
              <GripVertical />
            </ActionIcon>
          </div>

          <TextInput
            value={name}
            onChange={(e) => fieldsActions.rename(id, e.currentTarget.value)}
          />
          <Select
            value={fieldType}
            onChange={(value) =>
              fieldsActions.changeFieldType(id, value as Props["fieldType"])
            }
            data={data}
          />
          <ActionIcon
            onClick={() => fieldsActions.remove(id)}
            color="gray"
            variant="subtle"
          >
            <X />
          </ActionIcon>
        </Group>
      )}
    </Draggable>
  );
}
