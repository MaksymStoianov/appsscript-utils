import { toString } from "./toString";
import { ObjectTag } from "./types";

/**
 * ## isRegExp
 *
 * Checks if the provided value is a regular expression.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a regular expression (`RegExp` object); otherwise, `false`.
 * @since   1.0.0
 * @version 1.0.0
 */
export function isRegExp(value: unknown): value is RegExp {
  return toString(value) === ObjectTag.REG_EXP;
}
