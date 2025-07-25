import { InvalidEmailFormatException } from "../exceptions";
import { isEmail } from "./isEmail";
import { requireNonEmptyString } from "./requireNonEmptyString";

/**
 * Validates that the provided value is a non-empty string and a valid email format.
 *
 * @param   email - The string value representing an email to validate. Can be `null` or `undefined`.
 * @param   [message] - Optional. A custom error message if the validation fails.
 * @returns The validated, non-empty, and validly formatted email string.
 * @throws  {EmptyStringException} If the email is `null`, `undefined`, or an empty string after trimming.
 * @throws  {InvalidEmailFormatException} If the email string does not conform to a valid email format.
 * @since   0.1.0
 * @version 0.1.0
 */
export function requireValidEmail(
  email?: string | null | undefined,
  message?: string
): string {
  const value = requireNonEmptyString(email, message);

  if (!isEmail(value)) {
    throw new InvalidEmailFormatException(message);
  }

  return value;
}
