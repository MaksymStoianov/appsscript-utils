import { EmptyStringException } from "../exceptions";
import { isEmpty } from "../isEmpty";
import { isString } from "../isString";

/**
 * Checks if a given string represents an absolute path or URL.
 *
 * @param        path - The string path or URL to check.
 * @returns     `true` if the path is absolute; otherwise, `false`.
 * @environment `Google Apps Script`, `Browser`
 */
export function isAbsolute(path: string): path is string {
  if (!isString(path) || isEmpty(path)) {
    throw new EmptyStringException();
  }

  if (/^(\w+):\/\//.test(path) || /^(\w+):/.test(path)) {
    return true;
  }

  return path.startsWith("/");
}
