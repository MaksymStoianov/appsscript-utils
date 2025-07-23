import { isString } from "@/isString";

/**
 * Encodes characters in a string (from `U+00A0` to `U+9999`) into their corresponding HTML entities.
 *
 * @param   value - The string to encode.
 * @returns The string with HTML-encoded characters.
 * @since   0.1.0
 * @version 0.1.0
 */
export function encodeHtml(value: string): string {
  if (!isString(value)) {
    throw new TypeError("Input value must be a string.");
  }

  return value.replace(
    /([\u00A0-\u9999<>&])(.|$)/g,
    function (full, char, next) {
      if (char !== "&" || next !== "#") {
        if (/[\u00A0-\u9999<>&]/.test(next)) {
          next = `&#${next.charCodeAt(0)};`;
        }

        return `&#${char.charCodeAt(0)};${next}`;
      }

      return full;
    }
  );
}
