import { nonNil } from "@/base";
import { GridRange } from "./types";

/**
 * ## isCellGridRange
 *
 * Checks if a given {@link GridRange} represents a single cell.
 *
 * @param       range - The {@link GridRange} object to check.
 * @returns     `true` if the range represents a single cell, `false` otherwise.
 * @see         GridRange
 * @see         [Class Range](https://developers.google.com/apps-script/reference/spreadsheet/range)
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isCellGridRange({
  startRowIndex,
  endRowIndex,
  startColumnIndex,
  endColumnIndex
}: GridRange): boolean {
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
