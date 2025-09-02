import { isNull } from "./isNull";
import { isUndefined } from "./isUndefined";

/**
 * ## isNil
 *
 * Checks if the provided value is `null` or `undefined` (i.e., "nil").
 *
 * @param   value - The value to check.
 * @returns `true` if the value is `null` or `undefined`; otherwise, `false`.
 * @see     nonNil
 * @since   1.0.0
 * @version 1.0.0
 */
export function isNil(value: unknown): value is null | undefined {
  return isUndefined(value) || isNull(value);
}
