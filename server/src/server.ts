import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { faker } from "@faker-js/faker";
import { endpoints, generateDataReqSchema } from "shared";

const app = new Hono();

const mapFieldToFaker = {
  fullName: faker.person.fullName,
  firstName: faker.person.firstName,
  lastName: faker.person.lastName,
} as const;

app.post(endpoints.generateData, async (c) => {
  try {
    const data = await c.req.json();
    const parsedData = generateDataReqSchema.safeParse(data);

    if (!parsedData.success) {
      return c.json({ error: parsedData.error.errors }, 400);
    }

    const { totalRows, fields } = parsedData.data;

    const generatedData: any[] = [];

    fields.map((field) => {
      const fakerFunction = mapFieldToFaker[field.fieldType];

      generatedData.push(
        Array.from({ length: totalRows }, () => fakerFunction())
      );
    });

    return c.json({ generatedData });
  } catch (error) {
    return c.json({ error: "Invalid request data" }, 400);
  }
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
