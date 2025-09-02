import { NullPointerException } from "../exceptions";
import { isNil } from "./isNil";

/**
 * ## requireNonNull
 *
 * Ensures that the provided object is not `null` or `undefined`.
 *
 * @param    value the object to validate.
 * @param    [message]
 * @template T - The type of the object being checked.
 * @returns  The same object, guaranteed to be non-null and non-undefined.
 * @throws   {NullPointerException} If the object is `null` or `undefined`.
 * @see      nonNull
 * @see      isNull
 * @since    1.0.0
 * @version  1.0.0
 */
export function requireNonNull<T>(
  value?: T | null | undefined,
  message?: string
): T {
  if (isNil(value)) {
    throw new NullPointerException(message);
  }

  return value;
}
