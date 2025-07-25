import { EmptyStringException } from "../exceptions";
import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

/**
 * Escapes HTML special characters in a string.
 *
 * @param   value - The string to escape.
 * @returns The string with HTML special characters converted to entities.
 * @since   0.1.0
 * @version 0.1.0
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
