/**
 * Checks if the provided value is `null`.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is `null`; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
