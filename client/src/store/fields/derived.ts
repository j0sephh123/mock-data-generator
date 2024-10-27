import { derive } from "derive-valtio";
import { fieldsProxy } from "./store";

export const selectFields = derive({
  fields: (get) => get(fieldsProxy).fields,
  areFieldsDisabled: (get) => get(fieldsProxy).fields.length < 1,
});

export const selectTotalRows = derive({
  totalRows: (get) => get(fieldsProxy).totalRows,
});

export const selectCode = derive({
  code: (get) => get(fieldsProxy).code,
});