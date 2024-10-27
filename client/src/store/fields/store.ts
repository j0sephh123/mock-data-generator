import { proxy } from "valtio";
import { devtools } from "valtio/utils";
import { defaultFields } from "./constants";
import { FieldsProxy } from "./types";

export const storeProxy = proxy({
  items: [
    { id: "1", content: "Review pull request #123" },
    { id: "2", content: "Update documentation" },
    { id: "3", content: "Fix login page bug" },
    { id: "4", content: "Add new feature test" },
    { id: "5", content: "Deploy to production" },
  ],
});

export const fieldsProxy = proxy<FieldsProxy>({
  fields: defaultFields,
  totalRows: 10,
  code: null,
});

devtools(fieldsProxy, { name: "fields", enabled: true });
