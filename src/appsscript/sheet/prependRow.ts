import { type Options, prependRows } from "./prependRows";

/**
 * ## prependRow
 *
 * Prepends a single row to the top of the current data area on a [`sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet).
 * If a cell's content starts with `=`, it is interpreted as a formula.
 *
 * @param       sheet - The Google Apps Script {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object to which the row will be prepended.
 * @param       values - A 1D array containing the data for the single row.
 * @param       [options] - Additional parameters to customize the method's behavior.
 * @returns     The {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object.
 * @throws      {@link IllegalArgumentException}
 * @throws      {@link InvalidSheetException}
 * @see         {@link appendRow}
 * @see         {@link prependRows}
 * @see         {@link GoogleAppsScript.Spreadsheet.Range|Range}
 * @see         {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet}
 * @see         [Class Range](https://developers.google.com/apps-script/reference/spreadsheet/range)
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.5.0
 * @environment `Google Apps Script`
 * @author      Maksym Stoianov <stoianov.maksym@gmail.com>
 * @license     Apache-2.0
 */
export function prependRow(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  values: unknown,
  options: Options | null | undefined = {}
): GoogleAppsScript.Spreadsheet.Sheet {
  return prependRows(sheet, [values], options);
}
