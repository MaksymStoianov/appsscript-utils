import { isRange } from "./isRange";

/**
 * ## nonRange
 *
 * Checks if the provided value is not a [`Google Range`](https://developers.google.com/apps-script/reference/spreadsheet/range) object.
 *
 * @param value - The value to check.
 * @returns `true` if the value is not a {@link GoogleAppsScript.Spreadsheet.Range|Range} object.
 * @see         {@link isRange}
 * @see         {@link requireRange}
 * @see         {@link GoogleAppsScript.Spreadsheet.Range|Range}
 * @see         [Class Range](https://developers.google.com/apps-script/reference/spreadsheet/range)
 * @since       1.3.0
 * @version     1.0.0
 * @environment Google Apps Script
 */
export function nonRange<T>(
  value: T | GoogleAppsScript.Spreadsheet.Range
): value is T {
  return !isRange(value);
}
