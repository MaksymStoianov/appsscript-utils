import { isFunction } from "./isFunction";
import { isNil } from "./isNil";

/**
 * Checks if `value` is an object in a broader sense.
 *
 * @param   value - The value to check.
 * @returns `true` if `value` is an `Object`, else `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isObjectLike(value: unknown): value is object {
  return !isNil(value) && (typeof value === "object" || isFunction(value));
}
