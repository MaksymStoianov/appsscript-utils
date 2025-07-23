import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

/**
 * Checks if the provided string is a valid two-letter locale code.
 *
 * @param   value - The string value to validate as a locale code.
 * @returns `true` if the input is a valid two-letter locale code; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isValidLocale(value: string): boolean {
  return isString(value) && !isEmpty(value) && /^[a-z]{2}$/i.test(value);
}
