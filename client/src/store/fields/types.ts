import { PersonModule } from "@faker-js/faker";
import { faker } from "@faker-js/faker";
import { Debug } from "../../types";

export type PersonMethodKeys = Exclude<keyof PersonModule, number | symbol>;

export interface Item {
  id: string;
  content: string;
}

export type FieldI = {
  id: string;
  name: string;
  fieldType: PersonMethodKeys;
};

export type FieldsProxy = {
  fields: FieldI[];
  totalRows: number;
  code: string | null;
};

// Get all method names as a union type
type PersonModuleKeys = keyof typeof faker.person;

// If you want to exclude the internal properties and only get method names:
type PersonModuleMethods = {
  [K in keyof typeof faker.person]: (typeof faker.person)[K] extends Function
    ? K
    : never;
}[keyof typeof faker.person];

// You can use it like this:
const methodName: PersonModuleMethods = "firstName"; // TypeScript will ensure this is valid

// This will give you just the method names from the PersonModule class

// You can also get a more precise type that only includes methods:
type PersonMethods = {
  [K in keyof PersonModule]: PersonModule[K] extends Function ? K : never;
}[keyof PersonModule];

// Usage example
const methodName: PersonMethods = "firstName"; // Will only allow actual method names

// Helper to visualize the union type

// View all available methods
type AllPersonMethods = Debug<PersonMethods>;
