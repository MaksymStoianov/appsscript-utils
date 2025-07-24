import { isEmpty } from "./isEmpty";
import { isNil } from "./isNil";
import { isNumber } from "./isNumber";
import { isString } from "./isString";

/**
 * Converts a value to an integer if possible.
 *
 * @param   value - The value to convert. Can be a number, string, null, undefined, or other types.
 * @returns The parsed or original integer, or `null` if the value cannot be converted.
 * @since   0.1.0
 * @version 0.1.0
 */
export function toInteger(value: unknown): number | null {
  if (isNil(value) || value === "") {
    return null;
  }

  if (isNumber(value)) {
    return value;
  }

  if (isString(value)) {
    if (isEmpty(value.trim())) {
      return null;
    }

    const parsed = parseInt(value, 10);

    return isNaN(parsed) ? null : parsed;
  }

  return null;
}
