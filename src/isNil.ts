import { isUndefined } from "./isUndefined";

/**
 * Checks if the provided value is `null` or `undefined` (i.e., "nil").
 *
 * @param   value - The value to check.
 * @returns `true` if the value is `null` or `undefined`; otherwise, `false`.
 */
export function isNil(value: unknown): value is null | undefined {
  return isUndefined(value) || value === null;
}
