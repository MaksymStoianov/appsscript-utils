import { isString } from "./isString";

/**
 * Checks if the provided value is NOT a string.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is not a string; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function nonString(value: unknown): boolean {
  return !isString(value);
}
