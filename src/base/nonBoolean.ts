import { isBoolean } from "./isBoolean";

/**
 * ## nonBoolean
 *
 * Checks if the provided value is not a boolean.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is not boolean; otherwise, `false`.
 * @since   1.1.0
 * @version 1.0.0
 */
export function nonBoolean<T>(value: T | boolean): value is T {
  return !isBoolean(value);
}
