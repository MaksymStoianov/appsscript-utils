import { EmptyStringException } from "../exceptions";
import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

/**
 * Escapes special characters in a string for safe use within XML/HTML content.
 *
 * @param   value - The string containing characters to be escaped for XML.
 * @returns The escaped string, safe for use in XML/HTML text content or attribute values.
 * @throws  {EmptyStringException} If the input `value` is not a string, or is an empty string.
 * @since   0.1.0
 * @version 0.1.0
 */
export function escapeXml(value: string): string {
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
