import { isNull } from "./isNull";

/**
 * Checks if the provided value is not `null`.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is not `null`; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function nonNull(value: unknown): boolean {
  return !isNull(value);
}
