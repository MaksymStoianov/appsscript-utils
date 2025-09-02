import { isEmpty } from "../../base";

/**
 * ## getSheetById
 *
 * Retrieves a Google Sheet by its unique ID.
 *
 * @param       sheetId - The unique ID of the sheet to retrieve.
 * @param       [ss] - The Spreadsheet object to search within. Defaults to the active Spreadsheet if not provided.
 * @returns     The {@link GoogleAppsScript.Spreadsheet.Sheet|Sheet} object if found, otherwise `null`.
 * @see         [Class Sheet](https://developers.google.com/apps-script/reference/spreadsheet/sheet)
 * @since       1.0.0
 * @version     1.0.0
 * @environment `Google Apps Script`
 */
export function getSheetById(
  sheetId: number,
  ss?: GoogleAppsScript.Spreadsheet.Spreadsheet | undefined | null
): GoogleAppsScript.Spreadsheet.Sheet | null {
  const sheets = (ss || SpreadsheetApp.getActiveSpreadsheet()).getSheets();

  if (isEmpty(sheets)) {
    return null;
  }

  for (const sheet of sheets) {
    if (sheet.getSheetId() === sheetId) {
      return sheet;
    }
  }

  return null;
}
