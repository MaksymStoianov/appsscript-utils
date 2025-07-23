import { isNil } from "./isNil";

/**
 * Checks if the provided value is neither `null` nor `undefined` (i.e., "not nil").
 *
 * @param   value - The value to check.
 * @returns `true` if the value is not `null` and not `undefined`; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function nonNil(value: unknown): boolean {
  return !isNil(value);
}
