import { isString } from "../../base";

/**
 * Checks if the given value is a valid [`Google Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet) ID.
 *
 * @param       value The value to check.
 * @returns     `true` if the value is a string with a length greater than 10, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isValidSpreadsheetId(value: unknown): value is string {
  return isString(value) && value.length > 10;
}
