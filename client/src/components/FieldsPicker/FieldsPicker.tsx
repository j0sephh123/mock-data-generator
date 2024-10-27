import { Button, Flex, Text } from "@mantine/core";
import { Plus } from "lucide-react";
import FieldRow from "./FieldRow";
import { useSnapshot } from "valtio";
import { fieldsActions } from "../../store/fields/actions";
import { selectFields } from "../../store/fields/derived";
import { Droppable } from "@hello-pangea/dnd";

const MAX_FIELDS = 10;

export default function FieldsPicker() {
  const { fields } = useSnapshot(selectFields);

  return (
    <>
      <Flex>
        <Text>Field Name</Text>
        <Text>Field Type</Text>
      </Flex>
      <Droppable droppableId="droppable">
        {({
          droppableProps,
          innerRef: droppableInnerRef,
          placeholder: droppablePlaceholder,
        }) => (
          <div {...droppableProps} ref={droppableInnerRef}>
            {fields.map(({ fieldType, id, name }, index) => (
              <FieldRow
                name={name}
                fieldType={fieldType}
                key={id}
                id={id}
                index={index}
              />
            ))}
            {droppablePlaceholder}
          </div>
        )}
      </Droppable>

      {fields.length < MAX_FIELDS && (
        <Button onClick={fieldsActions.add} color="gray" leftSection={<Plus />}>
          Add Another Field
        </Button>
      )}
    </>
  );
}
