import { toString } from "./toString";
import { ObjectTag } from "./types";

/**
 * Checks if the provided value is a regular expression.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a regular expression (`RegExp` object); otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isRegExp(value: unknown): value is RegExp {
  return toString(value) === ObjectTag.REG_EXP;
}
