import { FieldTypeI } from "../../schemas";
import generateId from "../../utils/generateId";
import { fieldsProxy } from "./store";
import { FieldRowI, FieldsProxy } from "./types";

const remove = (id: FieldRowI["id"]) => {
  const index = fieldsProxy.fields.findIndex((field) => field.id === id);
  fieldsProxy.fields.splice(index, 1);
};
const add = () => {
  const lastField = fieldsProxy.fields[fieldsProxy.fields.length - 1];

  fieldsProxy.fields.push({
    id: generateId(),
    name: fieldsProxy.fields.length > 0 ? lastField.name : "first_name",
    fieldType:
      fieldsProxy.fields.length > 0 ? lastField.fieldType : "firstName",
  });
};
const rename = (id: FieldRowI["id"], newName: string) => {
  const foundElementIndex = fieldsProxy.fields.findIndex(
    (field) => field.id === id
  );
  fieldsProxy.fields[foundElementIndex].name = newName;
};

const changeFieldType = (id: FieldRowI["id"], newValue: FieldTypeI) => {
  const foundElementIndex = fieldsProxy.fields.findIndex(
    (field) => field.id === id
  );
  fieldsProxy.fields[foundElementIndex].fieldType = newValue;
};

const setCode = (code: FieldsProxy["code"]) => {
  fieldsProxy.code = code;
};

const handleDrag = (destinationIndex: number, sourceIndex: number) => {
  const newItems = Array.from(fieldsProxy.fields);
  const [reorderedItem] = newItems.splice(sourceIndex, 1);
  newItems.splice(destinationIndex, 0, reorderedItem);

  fieldsProxy.fields = newItems;
};

export const fieldsActions = {
  remove,
  add,
  rename,
  changeFieldType,
  setCode,
  handleDrag,
} as const;
