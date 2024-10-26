import { Button } from "@mantine/core";
import { Plus } from "lucide-react";
import { fieldsProxy } from "../../store/store";
import FieldRow from "../FieldRow/FieldRow";
import { useSnapshot } from "valtio";
import generateId from "../../utils/generateId";

const MAX_FIELDS = 10;

export default function FieldsPicker() {
  const { fields } = useSnapshot(fieldsProxy);

  const handleAddField = () => {
    const lastField = fields[fields.length - 1];
    fieldsProxy.fields = [
      ...fields,
      {
        id: generateId(),
        name: fields.length > 0 ? lastField.name : "first_name",
        fieldType: fields.length > 0 ? lastField.fieldType : "firstName",
      },
    ];
  };

  const handleRemoveField = (id: string) => {
    fieldsProxy.fields = fields.filter((field) => field.id !== id);
  };

  return (
    <>
      {fields.map(({ fieldType, id, name }) => (
        <FieldRow
          name={name}
          type={fieldType}
          key={id}
          id={id}
          onRemove={handleRemoveField}
        />
      ))}
      {fields.length < MAX_FIELDS && (
        <Button onClick={handleAddField} color="gray" leftSection={<Plus />}>
          Add Another Field
        </Button>
      )}
    </>
  );
}
