import { getColumnIndexByLetter } from "./getColumnIndexByLetter";

/**
 * Converts a column letter (or combination of letters) into a column position.
 *
 * @param       letter - The column label (e.g., `'A'`, `'B'`, ..., `'AA'`).
 * @returns     The corresponding column position.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function getColumnPositionByLetter(letter: string): number | null {
  const index = getColumnIndexByLetter(letter);
  return index ? index + 1 : null;
}
