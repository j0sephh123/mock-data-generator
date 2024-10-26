/* eslint-disable @typescript-eslint/no-explicit-any */
import { faker } from "@faker-js/faker";
import { generateDataReqSchema } from "shared";
import { z } from "zod";

const mapFieldToFaker = {
  fullName: faker.person.fullName,
  firstName: faker.person.firstName,
  lastName: faker.person.lastName,
} as const;

export default async function generateData(
  params: z.infer<typeof generateDataReqSchema>
) {
  return new Promise((resolve) => {
    const { totalRows, fields } = params;
    const generatedData: any[] = [];

    console.log(fields);
    

    for (let i = 0; i < totalRows; i++) {
      const data = fields.reduce<Record<string, string>>(
        (acc, { fieldType, name }) => {
          const result = mapFieldToFaker[fieldType]();

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
