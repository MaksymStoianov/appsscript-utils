import { isString } from "./isString";

/**
 * ## requireString
 *
 * Ensures that the provided value is a string, throwing an error otherwise.
 *
 * @param   value - The value to validate as a string.
 * @param   [message] - Optional custom error message if the validation fails.
 * @returns The validated string if the input is a valid string.
 * @see     isString
 * @see     nonString
 * @see     requireNonEmptyString
 * @since   1.0.0
 * @version 1.0.0
 */
export function requireString(value: unknown, message?: string): string {
  if (!isString(value)) {
    throw new TypeError(
      message ?? `Expected a string, but received ${typeof value}`
    );
  }

  return value;
}
