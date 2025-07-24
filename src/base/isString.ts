/**
 * Checks if the provided value is a string.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a string; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isString(value: unknown): value is string {
  return typeof value === "string";
}
