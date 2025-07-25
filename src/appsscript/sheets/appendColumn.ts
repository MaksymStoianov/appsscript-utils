import { appendColumns, Options } from "./appendColumns";

/**
 * Appends a single column to the right of the current data area on a [`sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet).
 * If a cell's content starts with `=`, it is interpreted as a formula.
 *
 * @param       sheet - The Google Apps Script {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object to which the column will be appended.
 * @param       values - A 1D array containing the data for the single column.
 * @param       [options] - Additional parameters to customize the method's behavior.
 * @returns     The {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object.
 * @since       0.1.0
 * @version     1.4.0
 * @environment `Google Apps Script`
 * @author      Maksym Stoianov <stoianov.maksym@gmail.com>
 * @license     Apache-2.0
 */
export function appendColumn(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  values: unknown,
  options: Options | null | undefined = {}
): GoogleAppsScript.Spreadsheet.Sheet {
  if (!arguments.length) {
    throw new Error(
      `The parameters () do not match the signature for appendColumn.`
    );
  }

  return appendColumns(sheet, [values], options);
}
