import camelToSnakeCase from "../../fakerService/camelToSnake";
import generateId from "../../utils/generateId";
import { fieldsProxy } from "./store";
import { FieldI, FieldsProxy } from "./types";

const remove = (id: FieldI["id"]) => {
  const index = fieldsProxy.fields.findIndex((field) => field.id === id);
  fieldsProxy.fields.splice(index, 1);
};
const add = () => {
  const field: Extract<FieldI, { fieldType: "fullName" }> = {
    id: generateId(),
    name: "full_name",
    fieldType: "fullName",
    options: {
      firstName: undefined,
      lastName: undefined,
      sex: undefined,
    },
  };

  fieldsProxy.fields.push(field);
};
const rename = (id: FieldI["id"], newName: string) => {
  const foundElementIndex = fieldsProxy.fields.findIndex(
    (field) => field.id === id
  );
  fieldsProxy.fields[foundElementIndex].name = newName;
};

const changeFieldType = (id: FieldI["id"], newValue: "fullName" | "gender") => {
  const foundElementIndex = fieldsProxy.fields.findIndex(
    (field) => field.id === id
  );

  fieldsProxy.fields[foundElementIndex].fieldType = newValue;
  fieldsProxy.fields[foundElementIndex].name = camelToSnakeCase(newValue);
};
const updateFullNameOptions = (
  id: FieldI["id"],
  newOptions: Extract<FieldI, { fieldType: "fullName" }>["options"]
) => {
  const foundElementIndex = fieldsProxy.fields.findIndex(
    (field) => field.id === id
  );

  (
    fieldsProxy.fields[foundElementIndex] as Extract<
      FieldI,
      { fieldType: "fullName" }
    >
  ).options = newOptions;
};

const setCode = (code: FieldsProxy["code"]) => {
  fieldsProxy.code = code;
};
const setTotalRows = (totalRows: FieldsProxy["totalRows"]) => {
  fieldsProxy.totalRows = totalRows;
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
  setTotalRows,
  updateFullNameOptions,
} as const;
