import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { faker } from "@faker-js/faker";
import { endpoints, generateDataReqSchema } from "shared";

const app = new Hono();

app.post(endpoints.generateData, async (c) => {
  try {
    const data = await c.req.json();
    const parsedData = generateDataReqSchema.safeParse(data);

    if (!parsedData.success) {
      return c.json({ error: parsedData.error.errors }, 400);
    }

    const { totalRows } = parsedData.data;
    const generatedData = Array.from({ length: totalRows }, () => {
      return faker.person.fullName();
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
