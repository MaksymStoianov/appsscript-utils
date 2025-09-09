import { InvalidSheetException } from "../../exception";
import { isSheet } from "./isSheet";

/**
 * ## requireSheet
 *
 * Ensures that the provided value is a valid {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object, throwing an exception otherwise.
 *
 * @param   value - The value to validate as a {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object.
 * @param   [message] - Optional custom error message if the validation fails.
 * @returns The validated {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object.
 * @throws  {@link InvalidSheetException}
 * @see     {@link isSheet}
 * @see     {@link nonSheet}
 * @since   1.5.0
 * @version 1.0.0
 */
export function requireSheet(
  value: unknown,
  message?: string
): GoogleAppsScript.Spreadsheet.Sheet {
  if (!isSheet(value)) {
    throw new InvalidSheetException(message);
  }

  return value;
}
