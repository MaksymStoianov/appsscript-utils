import { isNil } from "./isNil";

/**
 * Checks if `value` is the of `Object`.
 *
 * @param value - The value to check.
 * @returns `true` if `value` is an `Object`, else `false`.
 */
export function isObject(value: unknown): value is object {
  return !isNil(value) && typeof value === "object";
}
