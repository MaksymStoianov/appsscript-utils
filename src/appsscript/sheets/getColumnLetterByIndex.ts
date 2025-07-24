import { IllegalArgumentException } from "../../exceptions";

/**
 * Converts a column index into its corresponding column letter (or combination of letters).
 *
 * @example
 * getColumnLetterByIndex(0);   // Returns: A
 * getColumnLetterByIndex(26);  // Returns: AA
 * getColumnLetterByIndex(51);  // Returns: AZ
 *
 * @param       columnIndex The zero-based column index (e.g., `0` for 'A').
 * @returns     The alphabetical representation of the column.
 * @since       0.1.0
 * @version     0.1.0
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
