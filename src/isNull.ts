/**
 * Checks if the provided value is `null`.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is `null`; otherwise, `false`.
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
