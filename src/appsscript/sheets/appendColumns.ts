import { isConsistent2DArray } from "../../base";
import { isSheet } from "./";

export interface Options {
  /**
   * Determines whether to insert columns after frozen columns.
   * If `true`, columns will be added immediately to the right of any frozen columns, if they exist.
   */
  afterFrozenColumns?: boolean;
}

/**
 * ## appendColumns
 *
 * Appends columns to the right of the current data area on a [`sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet).
 * If a cell's content starts with `=`, it will be interpreted as a formula.
 *
 * @example
 * ```javascript
 * const ss = SpreadsheetApp.getActiveSpreadsheet();
 * const sheet = ss.getSheetByName('Sheet Name');
 *
 * appendColumns(sheet, [
 *  ["1-1", "1-2", "1-3"],
 *  ["2-1", "2-2", "2-3"],
 *  ["3-1", "3-2", "3-3"]
 * ]);
 * ```
 *
 * @param       sheet - The Google Apps Script {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object to which columns will be appended.
 * @param       values - A 2D array containing the data to append.
 * @param       [options] - Additional parameters to customize the method's behavior.
 * @returns     The {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object.
 * @see         appendColumn
 * @see         [Class Range](https://developers.google.com/apps-script/reference/spreadsheet/range)
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.4.0
 * @environment `Google Apps Script`
 * @author      Maksym Stoianov <stoianov.maksym@gmail.com>
 * @license     Apache-2.0
 */
export function appendColumns(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  values: unknown,
  options: Options | null | undefined = {}
): GoogleAppsScript.Spreadsheet.Sheet {
  if (!arguments.length) {
    throw new Error(
      `The parameters () do not match the signature for appendColumns.`
    );
  }

  if (!isSheet(sheet)) {
    throw new TypeError(`Invalid sheet object provided.`);
  }

  if (!isConsistent2DArray(values)) {
    throw new TypeError(
      `Invalid values provided. Expected a non-empty, consistent 2D array (e.g., [[1, 2], [3, 4]]).`
    );
  }

  const effectiveOptions: Required<Options> = {
    afterFrozenColumns: false,
    ...options
  };

  const lock = LockService.getDocumentLock();

  try {
    lock?.waitLock(30000);

    const numRows: number = values.length;
    const numColumns: number = values[0].length;

    const lastCol: number = sheet.getLastColumn();
    let columnPosition: number = lastCol;

    if (effectiveOptions.afterFrozenColumns !== false) {
      const frozenColumns = sheet.getFrozenColumns();

      if (columnPosition < frozenColumns) {
        columnPosition = frozenColumns;
      }
    }

    const range = sheet.getRange(1, columnPosition, numRows, numColumns);

    range.setValues(values);
  } catch (err: unknown) {
    throw err instanceof Error ? err.message : String(err);
  } finally {
    lock?.releaseLock();
  }

  return sheet;
}
