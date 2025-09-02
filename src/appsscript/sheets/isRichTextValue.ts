import { isObject } from "../../base";

/**
 * ## isRichTextValue
 *
 * Checks if the given value is a Google Apps Script [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is a {@link GoogleAppsScript.Spreadsheet.RichTextValue|RichTextValue} object, `false` otherwise.
 * @see         [Class RichTextValue](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value)
 * @since       1.0.0
 * @version     1.0.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isRichTextValue(
  value: unknown
): value is GoogleAppsScript.Spreadsheet.RichTextValue {
  return isObject(value) && value?.toString() === "RichTextValue";
}
