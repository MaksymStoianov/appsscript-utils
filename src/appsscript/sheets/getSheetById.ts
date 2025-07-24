import { isEmpty } from "../../base";

/**
 * Retrieves a Google Sheet by its unique ID.
 *
 * @param       sheetId The unique ID of the sheet to retrieve.
 * @param       [ss] The Spreadsheet object to search within. Defaults to the active Spreadsheet if not provided.
 * @returns     The `GoogleAppsScript.Spreadsheet.Sheet` object if found, otherwise `null`.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
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
