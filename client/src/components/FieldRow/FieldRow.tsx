import { ActionIcon, Group, Select, TextInput } from "@mantine/core";
import { GripVertical, X } from "lucide-react";
import { useCallback, useState } from "react";

const options = [
  { label: "First Name", value: "firstName" },
  { label: "Last Name", value: "lastName" },
  { label: "Full Name", value: "fullName" },
];

type Props = {
  id: string;
  type: "firstName" | "lastName" | "fullName";
  name: string;
  onRemove: (id: string) => void;
};

export default function FieldRow({ name, type, id, onRemove }: Props) {
  const [value, setValue] = useState(name);
  const [selectValue, setSelectValue] = useState<Props["type"]>(type);

  const handleRemove = useCallback(() => {
    onRemove(id);
  }, [id, onRemove]);

  return (
    <Group>
      <ActionIcon color="gray" variant="light">
        <GripVertical />
      </ActionIcon>
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Select
        value={selectValue}
        onChange={(value) => setSelectValue(value as Props["type"])}
        data={options}
      />
      <ActionIcon onClick={handleRemove} color="gray" variant="light">
        <X />
      </ActionIcon>
    </Group>
  );
}
