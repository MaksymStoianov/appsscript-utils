import { isNumber } from "./isNumber";
import { isString } from "./isString";

/**
 * Checks if the provided value is a number in a broader sense.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a number; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isNumberLike(value: unknown): boolean {
  return (
    (isNumber(value) && !Number.isNaN(value) && Number.isFinite(value)) ||
    (isString(value) &&
      value.trim().length > 0 &&
      !Number.isNaN(Number(value)) &&
      Number.isFinite(Number(value)))
  );
}
