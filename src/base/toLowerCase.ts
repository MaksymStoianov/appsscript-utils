import { requireNonEmptyString } from "./requireNonEmptyString";

interface Options {
  trim?: boolean;
}

/**
 * Returns a new string converted to lowercase.
 *
 * #### Example
 * ```javascript
 * const text = "  Hello   world!  ";
 * const result = toLowerCase(text);
 *
 * console.log(result); //   hello   world!
 *
 * const trimmedResult = toLowerCase(text, { trim: true });
 * console.log(trimmedResult); // hello world!
 * ```
 * @param   value - The input string to convert.
 * @param   [options] - Optional configuration options.
 * @returns The string converted to lowercase, with optional whitespace normalization.
 * @throws  {Error} (or specific exception from `requireNonEmptyString`) If the `value` is an empty string or not a string.
 * @since   0.1.0
 * @version 0.1.0
 */
export function toLowerCase(value: string, options: Options = {}): string {
  const effectiveOptions: Required<Options> = {
    trim: false,
    ...options
  };

  let result = requireNonEmptyString(value).toLowerCase();

  if (effectiveOptions.trim === true) {
    result = result.trim().replace(/\s+/g, " ");
  }

  return result;
}
