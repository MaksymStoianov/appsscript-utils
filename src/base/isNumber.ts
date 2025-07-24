/**
 * Checks if the provided value is a number.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a number; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isNumber(value: unknown): value is number {
  return typeof value === "number";
}
