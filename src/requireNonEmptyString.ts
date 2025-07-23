import { EmptyStringException } from "./exceptions";
import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

/**
 * Validates that the provided value is a non-empty string.
 *
 * @param   value - The string value to validate. Can be `null` or `undefined`.
 * @param   [message] - Optional. A custom error message if the validation fails.
 * @returns The validated non-empty string.
 * @throws  {EmptyStringException} If the value is `null`, `undefined`, or an empty string after trimming.
 */
export function requireNonEmptyString(
  value: string | null | undefined,
  message?: string
): string {
  if (!isString(value) || isEmpty(value)) {
    throw new EmptyStringException(message);
  }

  return value;
}
