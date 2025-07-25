import { isObject } from "../../base";

/**
 * Checks if the given value is a Google Apps Script [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is a {@link GoogleAppsScript.Spreadsheet.RichTextValue|RichTextValue} object, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isRichTextValue(
  value: unknown
): value is GoogleAppsScript.Spreadsheet.RichTextValue {
  return isObject(value) && value?.toString() === "RichTextValue";
}
