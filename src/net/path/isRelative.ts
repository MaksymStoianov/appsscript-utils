import { isAbsolute } from "./isAbsolute";

/**
 * Checks if a given string represents a relative path.
 *
 * @param       path - The string path to check.
 * @returns     `true` if the path is relative; otherwise, `false`.
 * @throws      {@link EmptyStringException}
 * @see         {@link isAbsolute}
 * @environment `Google Apps Script`, `Browser`
 */
export function isRelative(path: string): path is string {
  return !isAbsolute(path);
}
