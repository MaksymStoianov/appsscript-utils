import { EmptyStringException } from "../exceptions";
import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

/**
 * ## escapeHtml
 *
 * Escapes HTML special characters in a string.
 *
 * @param   value - The string to escape.
 * @returns The string with HTML special characters converted to entities.
 * @see     escapeRegExp
 * @see     escapeXml
 * @since   1.0.0
 * @version 1.0.0
 */
export function escapeHtml(value: string): string {
  if (!isString(value) || isEmpty(value)) {
    throw new EmptyStringException();
  }

  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
