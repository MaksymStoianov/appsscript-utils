import { isString } from "./isString";

/**
 * Ensures that the provided value is a string, throwing an error otherwise.
 *
 * @param   value - The value to validate as a string.
 * @param   [message] - Optional custom error message if the validation fails.
 * @returns The validated string if the input is a valid string.
 * @since   0.1.0
 * @version 0.1.0
 */
export function requireString(value: unknown, message?: string): string {
  if (!isString(value)) {
    throw new TypeError(
      message ?? `Expected a string, but received ${typeof value}`
    );
  }

  return value;
}
