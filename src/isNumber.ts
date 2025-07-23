/**
 * Checks if the provided value is a number.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a number; otherwise, `false`.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}
