import { GridRange } from "./types";

/**
 * ## isGridRangeContainedIn
 *
 * Checks if a `GridRange` is entirely contained within another `GridRange`.
 * Both ranges must be located on the same sheet (either by `sheetId` or by `sheetName`).
 *
 * @param       gridRange - The `GridRange` object that is potentially a subset (child range).
 * @param       containerGridRange - The `GridRange` object that is potentially a superset (parent range).
 * @returns     `true` if `gridRange` is fully contained within `containerGridRange` and they are on the same sheet;
 * `false` otherwise.
 * @see         GridRange
 * @see         [Class Range](https://developers.google.com/apps-script/reference/spreadsheet/range)
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.0.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isGridRangeContainedIn(
  gridRange: GridRange,
  containerGridRange: GridRange
): boolean {
  const sheetIdsMatch =
    containerGridRange.sheetId != null && gridRange.sheetId != null
      ? containerGridRange.sheetId === gridRange.sheetId
      : true;

  const sheetNamesMatch =
    containerGridRange.sheetName != null && gridRange.sheetName != null
      ? containerGridRange.sheetName === gridRange.sheetName
      : true;

  if (!sheetIdsMatch || !sheetNamesMatch) {
    if (
      (containerGridRange.sheetId != null &&
        gridRange.sheetId != null &&
        !sheetIdsMatch) ||
      (containerGridRange.sheetName != null &&
        gridRange.sheetName != null &&
        !sheetNamesMatch)
    ) {
      return false;
    }
  }

  const outerStartRow = containerGridRange.startRowIndex ?? 0;
  const outerEndRow = containerGridRange.endRowIndex ?? Infinity;
  const outerStartCol = containerGridRange.startColumnIndex ?? 0;
  const outerEndCol = containerGridRange.endColumnIndex ?? Infinity;

  const innerStartRow = gridRange.startRowIndex ?? 0;
  const innerEndRow = gridRange.endRowIndex ?? Infinity;
  const innerStartCol = gridRange.startColumnIndex ?? 0;
  const innerEndCol = gridRange.endColumnIndex ?? Infinity;

  return (
    innerStartRow >= outerStartRow &&
    innerEndRow <= outerEndRow &&
    innerStartCol >= outerStartCol &&
    innerEndCol <= outerEndCol
  );
}
