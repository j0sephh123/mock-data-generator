import { z } from "zod";

export const fieldTypeSchema = z.enum(["firstName", "lastName", "fullName"]);
export type FieldTypeI = z.infer<typeof fieldTypeSchema>;

export const fieldSchema = z.object({
  name: z.string().min(1),
  fieldType: fieldTypeSchema,
});

export const generateDataReqSchema = z
  .object({
    fields: z.array(fieldSchema).min(1),
    totalRows: z.number().min(1).max(50),
  })
  .strict();
