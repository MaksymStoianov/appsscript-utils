import { isString } from "./isString";

/**
 * ## nonString
 *
 * Checks if the provided value is NOT a string.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is not a string; otherwise, `false`.
 * @see     nonString
 * @see     requireString
 * @since   1.0.0
 * @version 1.1.0
 */
export function nonString<T>(value: T | string): value is T {
  return !isString(value);
}
