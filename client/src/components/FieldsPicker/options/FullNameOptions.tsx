import { SexType } from "@faker-js/faker";
import { Group, Stack, Button, Select } from "@mantine/core";
import RemoveIcon from "../RemoveIcon";
import { useSnapshot } from "valtio";
import { fieldsProxy } from "../../../store/fields/store";
import { FieldI } from "../../../store/fields/types";
import { fieldsActions } from "../../../store/fields/actions";

// very wrong
export default function FullNameOptions({ id }: { id: string }) {
  const { options } = useSnapshot(fieldsProxy).fields.find(
    (field) => field.id === id
  ) as Extract<FieldI, { fieldType: "fullName" }>;

  return (
    <Stack>
      {/* <TextInput label="first name" />
  <TextInput label="last name" /> */}
      <Group>
        {options.sex && (
          <Select
            label="sex"
            value={options.sex}
            onChange={(value) =>
              fieldsActions.updateFullNameOptions(id, {
                ...options,
                sex: value as SexType,
              })
            }
            data={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}
          />
        )}
        {options.sex ? (
          <RemoveIcon
            actionIconProps={{
              mt: "lg",
            }}
            onClick={() =>
              fieldsActions.updateFullNameOptions(id, {
                ...options,
                sex: undefined
              })
            }
          />
        ) : (
          <Button
            onClick={() =>
              fieldsActions.updateFullNameOptions(id, {
                ...options,
                sex: "male",
              })
            }
            mt="lg"
          >
            Add Sex
          </Button>
        )}
      </Group>
    </Stack>
  );
}
