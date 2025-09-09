import { IllegalArgumentException } from "../../exception";
import { isConsistent2DArray } from "../../lang";
import { requireSheet } from "./requireSheet";

export interface Options {
  /**
   * Determines whether to insert rows after frozen rows.
   * If `true`, rows will be added immediately after the frozen rows, if they exist.
   */
  afterFrozenRows?: boolean;
}

/**
 * ## appendRows
 *
 * Appends rows to the bottom of the current data area on a [`sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet).
 * Data is written starting from column 1 of the new rows.
 * If a cell's content in `values` starts with `=`, it is interpreted as a formula.
 *
 * @example
 * ```javascript
 * const ss = SpreadsheetApp.getActiveSpreadsheet();
 * const sheet = ss.getSheetByName('Sheet Name');
 *
 * appendRows(sheet, [
 *  ["Value A1", "Value B1", "Value C1"],
 *  ["Value A2", "Value B2", "Value C2"]
 * ]);
 * ```
 *
 * @param       sheet - The Google Apps Script {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object to which columns will be appended.
 * @param       values - A 2D array containing the data to append.
 * @param       [options] - Additional parameters to customize the method's behavior.
 * @returns     The {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object.
 * @throws      {@link IllegalArgumentException}
 * @throws      {@link InvalidSheetException}
 * @see         {@link prependRows}
 * @see         {@link appendRow}
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
export function appendRows(
  sheet: GoogleAppsScript.Spreadsheet.Sheet,
  values: unknown,
  options: Options | null | undefined = {}
): GoogleAppsScript.Spreadsheet.Sheet {
  if (arguments.length === 0) {
    throw new IllegalArgumentException();
  }

  requireSheet(sheet);

  if (!isConsistent2DArray(values)) {
    throw new TypeError(
      `Invalid values provided. Expected a non-empty, consistent 2D array (e.g., [[1, 2], [3, 4]]).`
    );
  }

  const effectiveOptions: Required<Options> = {
    afterFrozenRows: false,
    ...options
  };

  const lock = LockService.getDocumentLock();

  try {
    lock?.waitLock(30000);

    const numRows: number = values.length;
    const numColumns: number = values[0].length;

    const lastRow: number = sheet.getLastRow();
    let rowPosition: number = lastRow;

    if (effectiveOptions.afterFrozenRows !== false) {
      const frozenRows = sheet.getFrozenRows();

      if (rowPosition < frozenRows) {
        rowPosition = frozenRows;
      }
    }

    const range = sheet.getRange(rowPosition + 1, 1, numRows, numColumns);

    range.setValues(values);
  } catch (err: unknown) {
    throw err instanceof Error ? err.message : String(err);
  } finally {
    lock?.releaseLock();
  }

  return sheet;
}
