import { GridRange } from "./types";

/**
 * Checks if two {@link GridRange} objects overlap and are on the same sheet.
 *
 * @param       gridRange1 - The first {@link GridRange} object to check.
 * @param       gridRange2 - The second {@link GridRange} object to check.
 * @returns     `true` if the ranges share at least one common cell and are located on the same sheet; `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function doGridRangesIntersect(
  gridRange1: GridRange,
  gridRange2: GridRange
): boolean {
  const sheetIdsMatch =
    gridRange1.sheetId != null && gridRange2.sheetId != null
      ? gridRange1.sheetId === gridRange2.sheetId
      : true;

  const sheetNamesMatch =
    gridRange1.sheetName != null && gridRange2.sheetName != null
      ? gridRange1.sheetName === gridRange2.sheetName
      : true;

  if (!sheetIdsMatch || !sheetNamesMatch) {
    if (
      (gridRange1.sheetId != null &&
        gridRange2.sheetId != null &&
        !sheetIdsMatch) ||
      (gridRange1.sheetName != null &&
        gridRange2.sheetName != null &&
        !sheetNamesMatch)
    ) {
      return false;
    }
  }

  const r1_startRow = gridRange1.startRowIndex ?? 0;
  const r1_endRow = gridRange1.endRowIndex ?? Infinity;
  const r1_startCol = gridRange1.startColumnIndex ?? 0;
  const r1_endCol = gridRange1.endColumnIndex ?? Infinity;

  const r2_startRow = gridRange2.startRowIndex ?? 0;
  const r2_endRow = gridRange2.endRowIndex ?? Infinity;
  const r2_startCol = gridRange2.startColumnIndex ?? 0;
  const r2_endCol = gridRange2.endColumnIndex ?? Infinity;

  return !(
    r1_endCol <= r2_startCol ||
    r2_endCol <= r1_startCol ||
    r1_endRow <= r2_startRow ||
    r2_endRow <= r1_startRow
  );
}
