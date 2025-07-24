import { isObject } from "../../base";

/**
 * Checks if the given value is a Google Apps Script [`TextStyle`](https://developers.google.com/apps-script/reference/spreadsheet/text-style) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is a {@link GoogleAppsScript.Spreadsheet.TextStyle|TextStyle} object, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isTextStyle(
  value: unknown
): value is GoogleAppsScript.Spreadsheet.TextStyle {
  return isObject(value) && value?.toString() === "TextStyle";
}
