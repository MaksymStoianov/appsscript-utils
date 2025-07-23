/**
 * Checks if the provided value is `undefined`.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is `undefined`; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === "undefined";
}
