import { isObject } from "../../base";

/**
 * Checks if the given value is a Google Apps Script [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is a {@link GoogleAppsScript.Spreadsheet.Spreadsheet|Spreadsheet} object, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isSpreadsheet(
  value: unknown
): value is GoogleAppsScript.Spreadsheet.Spreadsheet {
  return isObject(value) && value?.toString() === "Spreadsheet";
}
