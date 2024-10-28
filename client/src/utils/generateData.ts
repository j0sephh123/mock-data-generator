/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from "@faker-js/faker";
import { FieldsProxy } from "../store/fields/types";
import { DeepReadonly } from "../types";

export default async function generateData({
  fields,
  totalRows,
}: {
  fields: DeepReadonly<FieldsProxy["fields"]>;
  totalRows: FieldsProxy["totalRows"];
}) {
  return new Promise((resolve) => {
    const generatedData: any[] = [];

    console.log(fields);

    for (let i = 0; i < totalRows; i++) {
      const data = fields.reduce<Record<string, string>>(
        (acc, { fieldType, name }) => {
          const result = faker.person[fieldType]();

          acc[name] = result;

          return acc;
        },
        {}
      );
      generatedData.push(data);
    }

    resolve(generatedData);
  });
}
