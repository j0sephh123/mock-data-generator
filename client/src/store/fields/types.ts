import { FieldTypeI } from "../../schemas";

export interface Item {
  id: string;
  content: string;
}

export type FieldRowI = {
  id: string;
  name: string;
  fieldType: FieldTypeI;
};

export type FieldsProxy = {
  fields: FieldRowI[];
  totalRows: number;
  code: string | null;
};
