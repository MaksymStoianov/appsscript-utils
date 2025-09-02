import { IllegalArgumentException } from "../../exceptions";

/**
 * ## getColumnLetterByIndex
 *
 * Converts a column index into its corresponding column letter (or combination of letters).
 *
 * @example
 * ```javascript
 * getColumnLetterByIndex(0);   // Returns: A
 * getColumnLetterByIndex(26);  // Returns: AA
 * getColumnLetterByIndex(51);  // Returns: AZ
 * ```
 *
 * @param       columnIndex - The zero-based column index (e.g., `0` for 'A').
 * @returns     The alphabetical representation of the column.
 * @see         getColumnIndexByLetter
 * @see         getColumnLetterByPosition
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.0.0
 * @environment `Google Apps Script`, `Browser`
 */
export function getColumnLetterByIndex(columnIndex: number): string {
  if (!arguments.length) {
    throw new Error(
      `The parameters () do not match the signature for getColumnLetterByIndex.`
    );
  }

  if (!(Number.isInteger(columnIndex) && columnIndex >= 0)) {
    throw new IllegalArgumentException();
  }

  let result = "";

  let temp = columnIndex + 1;
  while (temp > 0) {
    const remainder = (temp - 1) % 26;

    result = String.fromCharCode(65 + remainder) + result;
    temp = Math.floor((temp - 1) / 26);
  }

  return result;
}
