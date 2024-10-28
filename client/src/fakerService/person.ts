import { faker } from "@faker-js/faker";

const personMethods = Object.getOwnPropertyNames(
  Object.getPrototypeOf(faker.person)
).filter((method) => method !== "constructor");

export default personMethods;
