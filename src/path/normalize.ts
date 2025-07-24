import { join } from "./join";

/**
 * Normalizes a URL path, bringing it to a standard, absolute form.
 *
 * @param       path - The original URL path string to normalize.
 * @returns     A new string representing the normalized, absolute, and URL-encoded path.
 * @environment `Google Apps Script`, `Browser`
 */
export function normalize(path: string): string {
  return join("/", path.trim());
}
