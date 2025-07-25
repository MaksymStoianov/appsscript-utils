import { getColumnLetterByIndex } from "@/appsscript";

/**
 * Converts a column position into its corresponding column letter (or combination of letters).
 *
 * @param       columnPosition - The zero-based column position (e.g., `1` for 'A').
 * @returns     The alphabetical representation of the column.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function getColumnLetterByPosition(columnPosition: number): string {
  return getColumnLetterByIndex(columnPosition - 1);
}
