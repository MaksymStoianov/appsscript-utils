import { requireNonEmptyString } from "./requireNonEmptyString";

interface Options {
  trim?: boolean;
}

/**
 * Returns a new string converted to uppercase.
 *
 * This function first ensures the input is a non-empty string. It then converts
 * the entire string to uppercase. Optionally, it can also normalize whitespace.
 *
 * #### Example
 * ```javascript
 * const text = "Hello world!";
 * const result = toUpperCase(text);
 *
 * console.log(result); // HELLO WORLD!
 *
 * const textWithWhitespace = "  Hello   world!  ";
 * const trimmedResult = toUpperCase(textWithWhitespace, { trim: true });
 * console.log(trimmedResult); // HELLO WORLD!
 * ```
 * @param   value - The input string to convert.
 * @param   [options] - Optional configuration options.
 * @returns The string converted to uppercase, with optional whitespace normalization.
 * @throws {Error} (or specific exception from `requireNonEmptyString`) If the `value` is an empty string or not a string.
 * @since   0.1.0
 * @version 0.1.0
 */
export function toUpperCase(value: string, options: Options = {}): string {
  const effectiveOptions: Required<Options> = {
    trim: false,
    ...options
  };

  let result = requireNonEmptyString(value).toUpperCase();

  if (effectiveOptions.trim === true) {
    result = result.trim().replace(/\s+/g, " ");
  }

  return result;
}
