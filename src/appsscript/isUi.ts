import { isObject } from "../base";

/**
 * Checks if the given value is a Google Apps Script [`Ui`](https://developers.google.com/apps-script/reference/base/ui.html) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is an {@link GoogleAppsScript.Base.Ui|Ui} object, `false` otherwise.
 * @environment `Google Apps Script`
 */
export function isUi(value: unknown): value is GoogleAppsScript.Base.Ui {
  return isObject(value) && value?.toString() === "Ui";
}
