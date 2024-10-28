export default function camelToSnakeCase(str: string): string {
  return str
    .replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`)
    .replace(/^_/, "");
}
