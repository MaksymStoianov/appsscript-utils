import { GridRange } from "./types";

/**
 * Checks if a given {@link GridRange} represents a single cell.
 *
 * @param       range The {@link GridRange} object to check.
 * @returns     `true` if the range represents a single cell, `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isCellGridRange(range: GridRange): boolean {
  if (
    range.startRowIndex !== undefined &&
    range.startRowIndex !== null &&
    range.endRowIndex !== undefined &&
    range.endRowIndex !== null &&
    range.startColumnIndex !== undefined &&
    range.startColumnIndex !== null &&
    range.endColumnIndex !== undefined &&
    range.endColumnIndex !== null
  ) {
    const isSingleRow = range.endRowIndex - range.startRowIndex === 1;
    const isSingleColumn = range.endColumnIndex - range.startColumnIndex === 1;

    return isSingleRow && isSingleColumn;
  }

  return false;
}
