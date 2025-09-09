import { InvalidGridRangeException } from "../../exception";
import { isObject, nonNil } from "../../lang";
import type { GridRange } from "./types";

/**
 * ## isCellGridRange
 *
 * Checks if a given {@link GridRange} represents a single cell.
 *
 * @param       gridRange - The {@link GridRange} object to check.
 * @returns     `true` if the range represents a single cell, `false` otherwise.
 * @throws      {@link IllegalArgumentException}
 * @see         {@link GridRange}
 * @see         {@link GoogleAppsScript.Spreadsheet.Range|Range}
 * @see         [Class Range](https://developers.google.com/apps-script/reference/spreadsheet/range)
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.2.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isCellGridRange(gridRange: GridRange): boolean {
  if (!isObject(gridRange)) {
    throw new InvalidGridRangeException();
  }

  const { startRowIndex, endRowIndex, startColumnIndex, endColumnIndex } =
    gridRange;

  if (
    nonNil(startRowIndex) &&
    nonNil(endRowIndex) &&
    nonNil(startColumnIndex) &&
    nonNil(endColumnIndex)
  ) {
    const isSingleRow = endRowIndex - startRowIndex === 1;
    const isSingleColumn = endColumnIndex - startColumnIndex === 1;

    return isSingleRow && isSingleColumn;
  }

  return false;
}
