import { isString } from "./isString";

/**
 * Decodes common HTML entities in a string.
 *
 * @param   value - The string containing HTML entities to decode.
 * @returns The string with decoded HTML entities.
 * @since   0.1.0
 * @version 0.2.0
 */
export function decodeHtml(value: string): string {
  if (!isString(value)) {
    throw new TypeError("Input value must be a string.");
  }

  return value
    .replace(/&#(\d+);/g, (match, dec) => {
      return String.fromCharCode(parseInt(dec, 10));
    })
    .replace(/&#x([0-9a-fA-F]+);/g, (match, hex) => {
      return String.fromCharCode(parseInt(hex, 16));
    });
}
