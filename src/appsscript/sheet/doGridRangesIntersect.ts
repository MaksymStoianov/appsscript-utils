import {
  IllegalArgumentException,
  InvalidGridRangeException
} from "../../exception";
import { isObject } from "../../lang";
import { isValidSheetId } from "./isValidSheetId";
import { isValidSheetName } from "./isValidSheetName";
import type { GridRange } from "./types";

/**
 * ## doGridRangesIntersect
 *
 * Checks if two {@link GridRange} objects overlap and are on the same sheet.
 *
 * @param       gridRange1 - The first {@link GridRange} object to check.
 * @param       gridRange2 - The second {@link GridRange} object to check.
 * @returns     `true` if the ranges share at least one common cell and are located on the same sheet; `false` otherwise.
 * @throws      {@link IllegalArgumentException}
 * @throws      {@link InvalidGridRangeException}
 * @see         {@link GridRange}
 * @see         {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet}
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function doGridRangesIntersect(
  gridRange1: GridRange,
  gridRange2: GridRange
): boolean {
  if (arguments.length === 0) {
    throw new IllegalArgumentException();
  }

  if (!isObject(gridRange1)) {
    throw new InvalidGridRangeException();
  }

  if (!isObject(gridRange2)) {
    throw new InvalidGridRangeException();
  }

  const sheetIdsMatch =
    isValidSheetId(gridRange1.sheetId) && isValidSheetId(gridRange2.sheetId)
      ? gridRange1.sheetId === gridRange2.sheetId
      : true;

  const sheetNamesMatch =
    isValidSheetName(gridRange1.sheetName) &&
    isValidSheetName(gridRange2.sheetName)
      ? gridRange1.sheetName === gridRange2.sheetName
      : true;

  if (!sheetIdsMatch || !sheetNamesMatch) {
    if (
      (isValidSheetId(gridRange1.sheetId) &&
        isValidSheetId(gridRange2.sheetId) &&
        !sheetIdsMatch) ||
      (isValidSheetName(gridRange1.sheetName) &&
        isValidSheetName(gridRange2.sheetName) &&
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
