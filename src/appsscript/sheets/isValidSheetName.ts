import { isEmpty, isString } from "../../base";

/**
 * Checks if the given value is a valid [sheet name](https://developers.google.com/apps-script/reference/spreadsheet/sheet).
 * A valid sheet name, according to this function, is a non-empty string.
 *
 * @param       value The value to check.
 * @returns     `true` if the value is a non-empty string, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isValidSheetName(value: unknown): value is string {
  return isString(value) && !isEmpty(value);
}
