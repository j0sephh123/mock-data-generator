import { Button } from "@mantine/core";
import { Plus } from "lucide-react";
import FieldRow from "../FieldRow/FieldRow";

const MAX_FIELDS = 10;

export default function FieldsPicker({
  renderedFields,
  setRenderedFields,
  handleAddField,
}: {
  handleAddField: () => void;
  renderedFields: {
    id: string;
    name: string;
    fieldType: "firstName" | "fullName" | "lastName";
  }[];
  setRenderedFields: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
        fieldType: "firstName" | "fullName" | "lastName";
      }[]
    >
  >;
}) {
  return (
    <>
      {renderedFields.map(({ fieldType, id, name }) => (
        <FieldRow
          name={name}
          type={fieldType}
          key={id}
          id={id}
          onRemove={(id) => {
            setRenderedFields((fields) =>
              fields.filter((field) => field.id !== id)
            );
          }}
        />
      ))}
      {renderedFields.length < MAX_FIELDS && (
        <Button onClick={handleAddField} color="gray" leftSection={<Plus />}>
          Add Another Field
        </Button>
      )}
    </>
  );
}
