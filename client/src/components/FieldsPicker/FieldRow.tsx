import { Autocomplete, TextInput } from "@mantine/core";
import { fieldsActions } from "../../store/fields/actions";
import DraggableWrapper from "./DraggableWrapper";
import RemoveIcon from "./RemoveIcon";
import OptionsIcon from "./OptionsIcon";
import { useState } from "react";
import ModalWrapper from "../DisplayData/ModalWrapper";
import personMethods from "../../fakerService/person";
import { FieldType } from "../../store/fields/types";
import FullNameOptions from "./options/FullNameOptions";

type Props = {
  id: string;
  fieldType: FieldType;
  name: string;
  index: number;
};

type Options = {
  title: string;
  fieldType: FieldType;
};

export default function FieldRow({ name, fieldType, id, index }: Props) {
  const [options, setOptions] = useState<Options | null>(null);

  return (
    <>
      <DraggableWrapper id={id} index={index}>
        <TextInput
          value={name}
          onChange={(e) => fieldsActions.rename(id, e.currentTarget.value)}
        />
        <Autocomplete
          value={fieldType}
          onChange={(value) =>
            fieldsActions.changeFieldType(id, value as Props["fieldType"])
          }
          data={personMethods}
        />
        <OptionsIcon
          onClick={() => setOptions({ title: `Config ${name}`, fieldType })}
        />
        <RemoveIcon onClick={() => fieldsActions.remove(id)} />
      </DraggableWrapper>
      <ModalWrapper
        title={options?.title ?? ""}
        onClose={() => setOptions(null)}
        isOpen={!!options}
      >
        {fieldType === "fullName" && <FullNameOptions id={id} />}
      </ModalWrapper>
    </>
  );
}
