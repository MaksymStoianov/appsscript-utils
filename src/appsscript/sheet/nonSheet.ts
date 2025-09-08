import { isSheet } from "./isSheet";

/**
 * ## nonSheet
 *
 * Checks if the provided value is not a [`Google Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet) object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is not a {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object.
 * @see         {@link isSheet}
 * @see         {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet}
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.3.0
 * @version     1.0.0
 * @environment Google Apps Script
 */
export function nonSheet<T>(
  value: T | GoogleAppsScript.Spreadsheet.Sheet
): value is T {
  return !isSheet(value);
}
