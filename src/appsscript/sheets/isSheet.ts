import { isObject } from "../../base";

/**
 * Checks if the given value is a Google Apps Script [`Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is a {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isSheet(
  value: unknown
): value is GoogleAppsScript.Spreadsheet.Sheet {
  return isObject(value) && value?.toString() === "Sheet";
}
