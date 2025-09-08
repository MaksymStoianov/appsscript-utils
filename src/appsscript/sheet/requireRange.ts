import { InvalidRangeException } from "../../exception";
import { isRange } from "./isRange";

/**
 * ## requireRange
 *
 * Ensures that the provided value is a valid {@link GoogleAppsScript.Spreadsheet.Range|Range} object, throwing an exception otherwise.
 *
 * @param   value - The value to validate as a {@link GoogleAppsScript.Spreadsheet.Range|Range} object.
 * @param   [message] - Optional custom error message if the validation fails.
 * @returns The validated {@link GoogleAppsScript.Spreadsheet.Range|Range} object.
 * @throws  {@link InvalidRangeException}
 * @see     {@link isRange}
 * @see     {@link nonRange}
 * @since   1.5.0
 * @version 1.0.0
 */
export function requireRange(
  value: unknown,
  message?: string
): GoogleAppsScript.Spreadsheet.Range {
  if (!isRange(value)) {
    throw new InvalidRangeException(message);
  }

  return value;
}
