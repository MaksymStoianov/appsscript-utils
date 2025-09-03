import { isSpreadsheet } from "./isSpreadsheet";

/**
 * Sorts all sheets in a spreadsheet alphabetically by name.
 *
 * @param spreadsheet - The spreadsheet object.
 * @param [callback] - An optional callback function for custom sorting.
 */
export function sortSheets(
  spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet,
  callback?: (a: string, b: string) => number
): void {
  if (!isSpreadsheet(spreadsheet)) {
    throw new Error("Spreadsheet object is not valid.");
  }

  try {
    const sheets = spreadsheet.getSheets();

    if (sheets.length < 2) {
      return;
    }

    const sheetNames = sheets.map(sheet => sheet.getName());
    sheetNames.sort(callback);

    sheetNames.forEach(function (name, i) {
      const sheet = spreadsheet.getSheetByName(name);

      if (sheet && sheet.getIndex() !== i + 1) {
        spreadsheet.setActiveSheet(sheet);
        spreadsheet.moveActiveSheet(i + 1);
      }
    });
  } catch (err: unknown) {
    console.error(`Failed to sort sheets: ${err}`);
  }
}
