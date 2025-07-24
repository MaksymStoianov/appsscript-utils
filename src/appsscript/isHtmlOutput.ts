import { isFunction, isObject } from "../base";

type HtmlOutput = GoogleAppsScript.HTML.HtmlOutput;

/**
 * Checks if the given value is a Google Apps Script [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is an {@link GoogleAppsScript.HTML.HtmlOutput|HtmlOutput} object, `false` otherwise.
 * @environment `Google Apps Script`
 */
export function isHtmlOutput(value: unknown): value is HtmlOutput {
  return (
    isObject(value) &&
    isFunction((value as HtmlOutput)?.getContent) &&
    isFunction((value as HtmlOutput)?.setTitle) &&
    isFunction((value as HtmlOutput)?.setXFrameOptionsMode)
  );
}
