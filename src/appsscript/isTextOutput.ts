import { isFunction, isObject } from "../base";

type TextOutput = GoogleAppsScript.Content.TextOutput;

/**
 * Checks if the given value is a Google Apps Script [`TextOutput`](https://developers.google.com/apps-script/reference/content/text-output) object.
 *
 * @param       value - The value to check.
 * @returns     `true` if the value is an {@link GoogleAppsScript.Content.TextOutput|TextOutput} object, `false` otherwise.
 * @environment `Google Apps Script`
 */
export function isTextOutput(value: unknown): value is TextOutput {
  return (
    isObject(value) &&
    isFunction((value as TextOutput)?.getMimeType) &&
    isFunction((value as TextOutput)?.getContent)
  );
}
