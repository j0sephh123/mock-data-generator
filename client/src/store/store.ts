import { proxy } from "valtio";
import { FieldTypeI } from "../schemas";

export interface Item {
  id: string;
  content: string;
}

export type FieldRowI = {
  id: string;
  name: string;
  fieldType: FieldTypeI;
};

export const defaultFields: FieldRowI[] = [
  {
    id: "1",
    name: "first_name",
    fieldType: "firstName",
  },
  {
    id: "2",
    name: "full_name",
    fieldType: "fullName",
  },
  {
    id: "3",
    name: "last_name",
    fieldType: "lastName",
  },
];

// Updated store to include all state
export const storeProxy = proxy({
  items: [
    { id: "1", content: "Review pull request #123" },
    { id: "2", content: "Update documentation" },
    { id: "3", content: "Fix login page bug" },
    { id: "4", content: "Add new feature test" },
    { id: "5", content: "Deploy to production" },
  ],
  totalRows: 10,
  code: null as string | null,
});

export const fieldsProxy = proxy<{ fields: FieldRowI[] }>({
  fields: defaultFields,
});
