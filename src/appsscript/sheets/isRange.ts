import { isObject } from "../../base";

/**
 * Checks if the given value is a Google Apps Script [`Range`](https://developers.google.com/apps-script/reference/spreadsheet/range) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is a {@link GoogleAppsScript.Spreadsheet.Range|Range} object, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isRange(
  value: unknown
): value is GoogleAppsScript.Spreadsheet.Range {
  return isObject(value) && value?.toString() === "Range";
}
