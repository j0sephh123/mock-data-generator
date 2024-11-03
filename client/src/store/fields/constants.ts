import { FieldI } from "./types";

export const defaultFields: FieldI[] = [
  {
    id: "1",
    name: "full_name",
    fieldType: "fullName",
    options: {
      firstName: undefined,
      lastName: undefined,
      sex: undefined,
    },
  },
  {
    id: "2",
    name: "gender",
    fieldType: "gender",
  },
];
