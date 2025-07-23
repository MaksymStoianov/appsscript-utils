import { isNumber } from "./isNumber";

/**
 * Checks if the provided value is NOT a number.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is not a number; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function nonNumber(value: unknown): boolean {
  return !isNumber(value);
}
