import { proxy } from "valtio";
import { devtools } from "valtio/utils";
import { defaultFields } from "./constants";
import { FieldsProxy } from "./types";

export const fieldsProxy = proxy<FieldsProxy>({
  fields: defaultFields,
  totalRows: 10,
  code: null,
});

devtools(fieldsProxy, { name: "fields", enabled: true });
