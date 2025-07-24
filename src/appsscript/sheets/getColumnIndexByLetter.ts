import { requireNonEmptyString } from "../../base";

/**
 * Converts a column letter (or combination of letters) into a column number.
 *
 * @example
 * getColumnIndexByLetter("A");   // Returns: 1
 * getColumnIndexByLetter("AA");  // Returns: 27
 * getColumnIndexByLetter("AZ");  // Returns: 52
 *
 * @param       letter The column label (e.g., `'A'`, `'B'`, ..., `'AA'`).
 * @returns     The corresponding column number (1-based index).
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function getColumnIndexByLetter(letter: string): number | null {
  const upperCaseLetter = requireNonEmptyString(letter).toUpperCase();
  const PATTERN = /^[A-Z]+$/;

  if (!PATTERN.test(upperCaseLetter)) {
    throw new SyntaxError(
      `Invalid column letter format: "${letter}". Must contain only alphabetic characters.`
    );
  }

  let index = 0;
  const base = 26;
  const charCodeA = "A".charCodeAt(0);

  for (let i = 0; i < upperCaseLetter.length; i++) {
    index = index * base + (upperCaseLetter.charCodeAt(i) - charCodeA + 1);
  }

  return index - 1;
}
