import { getColumnLetterByIndex } from "./getColumnLetterByIndex";
import { GridRange } from "./types";

/**
 * Converts a {@link GridRange} object back into an A1 notation string.
 *
 * @example 1
 * const gridRange = {
 *  startRowIndex: 0,
 *  endRowIndex: 2,
 *  startColumnIndex: 0,
 *  endColumnIndex: 2
 * };
 *
 * const a1Notation = toA1Notation(gridRange);
 *
 * console.log(a1Notation); // A1:B2
 *
 * @param       gridRange - The {@link GridRange} object to convert.
 * @returns     The A1 notation string.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function toA1Notation(gridRange: GridRange): string {
  if (!gridRange) {
    throw new Error("Invalid GridRange object provided.");
  }

  const {
    sheetName,
    startRowIndex,
    endRowIndex,
    startColumnIndex,
    endColumnIndex
  } = gridRange;

  let rangePart = "";

  const hasStartRow = typeof startRowIndex === "number";
  const hasEndRow = typeof endRowIndex === "number";
  const hasStartCol = typeof startColumnIndex === "number";
  const hasEndCol = typeof endColumnIndex === "number";

  if (hasStartRow && startRowIndex < 0) {
    throw new Error("startRowIndex cannot be negative.");
  }

  if (hasStartCol && startColumnIndex < 0) {
    throw new Error("startColumnIndex cannot be negative.");
  }

  const a1StartRowNumber = hasStartRow ? (startRowIndex as number) + 1 : "";
  const a1EndRowNumber = hasEndRow ? (endRowIndex as number) : "";
  const a1StartColLetter = hasStartCol
    ? getColumnLetterByIndex(startColumnIndex as number)
    : "";
  const a1EndColLetter =
    hasEndCol && (endColumnIndex as number) > 0
      ? getColumnLetterByIndex((endColumnIndex as number) - 1)
      : "";

  if (
    hasStartCol &&
    hasStartRow &&
    hasEndCol &&
    hasEndRow &&
    (endColumnIndex as number) === (startColumnIndex as number) + 1 &&
    (endRowIndex as number) === (startRowIndex as number) + 1
  ) {
    rangePart = `${a1StartColLetter}${a1StartRowNumber}`;
  } else if (
    hasStartCol &&
    hasStartRow &&
    (startRowIndex as number) === 0 &&
    !hasEndRow
  ) {
    if (
      hasEndCol &&
      (endColumnIndex as number) > (startColumnIndex as number) + 1
    ) {
      rangePart = `${a1StartColLetter}:${a1EndColLetter}`;
    } else if (
      hasEndCol &&
      (endColumnIndex as number) === (startColumnIndex as number) + 1
    ) {
      rangePart = `${a1StartColLetter}:${a1StartColLetter}`;
    } else if (!hasEndCol) {
      rangePart = `${a1StartColLetter}:${a1StartColLetter}`;
    } else {
      throw new Error(
        `Invalid or incomplete GridRange object for full column A1 notation conversion.`
      );
    }
  } else if (
    hasStartRow &&
    hasStartCol &&
    (startColumnIndex as number) === 0 &&
    !hasEndCol
  ) {
    if (hasEndRow && (endRowIndex as number) > (startRowIndex as number) + 1) {
      rangePart = `${a1StartRowNumber}:${a1EndRowNumber}`;
    } else if (
      hasEndRow &&
      (endRowIndex as number) === (startRowIndex as number) + 1
    ) {
      rangePart = `${a1StartRowNumber}:${a1StartRowNumber}`;
    } else if (!hasEndRow) {
      rangePart = `${a1StartRowNumber}:${a1StartRowNumber}`;
    } else {
      throw new Error(
        `Invalid or incomplete GridRange object for full row A1 notation conversion.`
      );
    }
  } else if (hasStartCol && hasStartRow && hasEndCol && !hasEndRow) {
    rangePart = `${a1StartColLetter}${a1StartRowNumber}:${a1EndColLetter}`;
  } else if (hasStartCol && hasStartRow && hasEndCol && hasEndRow) {
    rangePart = `${a1StartColLetter}${a1StartRowNumber}:${a1EndColLetter}${a1EndRowNumber}`;
  } else {
    throw new Error(
      `Invalid or incomplete GridRange object for A1 notation conversion.`
    );
  }

  let fullA1Notation = "";
  if (sheetName !== null && sheetName !== undefined) {
    const isSimpleSheetName = /^[A-Z_][A-Z0-9_]*$/i.test(sheetName);

    if (!isSimpleSheetName) {
      if (!sheetName.includes("'")) {
        fullA1Notation += `'${sheetName}'!`;
      } else if (!sheetName.includes('"')) {
        fullA1Notation += `"${sheetName}"!`;
      } else {
        fullA1Notation += `'${sheetName.replace(/'/g, "''")}'!`;
      }
    } else {
      fullA1Notation += `${sheetName}!`;
    }
  }

  fullA1Notation += rangePart;

  return fullA1Notation;
}
