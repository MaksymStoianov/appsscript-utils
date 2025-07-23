/**
 * Checks if the provided value is a boolean.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a boolean; otherwise, `false`.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === "boolean";
}
