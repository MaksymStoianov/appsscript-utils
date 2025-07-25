import { isNumber } from "./isNumber";

/**
 * Checks if `value` is a valid array-like length.
 *
 * @param   value - The value to check.
 * @returns `true` if `value` is a valid length, else `false`.
 * @since   0.1.0
 * @version 0.1.0
 * @see     https://lodash.com/docs/4.17.15#isLength
 */
export function isLength(value: unknown): boolean {
  return (
    isNumber(value) &&
    value > -1 &&
    value % 1 == 0 &&
    value <= Number.MAX_SAFE_INTEGER
  );
}
