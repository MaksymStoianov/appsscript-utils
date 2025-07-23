import { Exception } from "./exceptions";
import { isObject } from "./isObject";

/**
 * Checks if the provided value is an instance of {@link Exception} or a class that extends it.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is an instance of {@link Exception} (or a subclass); otherwise, `false`.
 */
export function isException(value: unknown): value is Exception {
  return isObject(value) && value instanceof Exception;
}
