import { isNumber } from "../../lang";

/**
 * ## isValidSheetId
 *
 * Checks if the given value is a valid [`Google Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet) ID.
 *
 * @param       value The value to check.
 * @returns     `true` if the value is a valid Sheet ID, `false` otherwise.
 * @see         {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet}
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.5.0
 * @version     1.0.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isValidSheetId(value: unknown): value is number {
  return isNumber(value) && value >= 0;
}
