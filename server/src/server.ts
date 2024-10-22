import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { faker } from "@faker-js/faker";

const app = new Hono();

app.get("/", (c) => {
  const randomName = faker.person.fullName();
  return c.json({ randomName });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
