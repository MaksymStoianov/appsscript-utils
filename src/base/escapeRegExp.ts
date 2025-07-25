import { EmptyStringException } from "../exceptions";
import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

/**
 * Escapes special characters in a string to be safely used inside a regular expression.
 *
 * @param   value - The string to escape.
 * @returns The escaped string, safe for use in a regular expression.
 * @throws  {EmptyStringException} If the input `value` is not a string, or is an empty string.
 * @since   0.1.0
 * @version 0.1.0
 */
export function escapeRegExp(value: string): string {
  if (!isString(value) || isEmpty(value)) {
    throw new EmptyStringException();
  }

  return value.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
