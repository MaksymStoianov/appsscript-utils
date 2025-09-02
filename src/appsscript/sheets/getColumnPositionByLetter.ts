import { getColumnIndexByLetter } from "./getColumnIndexByLetter";

/**
 * ## getColumnPositionByLetter
 *
 * Converts a column letter (or combination of letters) into a column position.
 *
 * @param       letter - The column label (e.g., `'A'`, `'B'`, ..., `'AA'`).
 * @returns     The corresponding column position.
 * @see         getColumnLetterByPosition
 * @see         getColumnLetterByIndex
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.0.0
 * @environment `Google Apps Script`, `Browser`
 */
export function getColumnPositionByLetter(letter: string): number | null {
  const index = getColumnIndexByLetter(letter);
  return index ? index + 1 : null;
}
