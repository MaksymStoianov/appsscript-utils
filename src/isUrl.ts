import { isString } from "./isString";

/**
 * Checks if the given value is a valid URL string.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a valid URL string; otherwise, `false`.
 *
 * @example
 * ```typescript
 * isUrl("[https://www.example.com](https://www.example.com)");       // true
 * isUrl("http://localhost:3000/path");    // true
 * isUrl("ftp://ftp.example.org/file.txt");// true
 * isUrl("invalid-url");                   // false (missing protocol)
 * isUrl("[example.com/path](https://example.com/path)");              // false (missing protocol)
 * isUrl("  [https://whitespace.com](https://whitespace.com)  ");   // true (leading/trailing whitespace is trimmed)
 * isUrl("");                              // false
 * isUrl("   ");                           // false
 * isUrl(null);                            // false
 * isUrl(undefined);                       // false
 * isUrl(123);                             // false
 * ```
 */
export function isUrl(value: unknown): value is string {
  if (!isString(value)) {
    return false;
  }

  const PATTERN =
    /^(https?|ftp):\/\/([^\s/?#]+\.[^\s/?#]+)(:\d+)?(\/\S*)?([?#]\S*)?$/i;

  return PATTERN.test(value);
}
