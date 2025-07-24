import { isEmpty } from "./isEmpty";
import { isString } from "./isString";

/**
 * Checks if the provided string is a valid slug.
 *
 * @param   value - The string value to validate.
 * @returns `true` if the value is a valid slug; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isValidSlug(value: string): boolean {
  return (
    isString(value) && !isEmpty(value) && /^[a-z][0-9a-z_-]*$/i.test(value)
  );
}
