import { isObject } from "./isObject";
import { toString } from "./toString";
import { ObjectTag } from "./types";

/**
 * Checks if the provided value is a function.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a function; otherwise, `false`.
 */
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function isFunction(value: unknown): value is Function {
  if (!isObject(value)) {
    return false;
  }

  const tag = toString(value) as ObjectTag;

  return [
    ObjectTag.FUNCTION,
    ObjectTag.GENERATOR_FUNCTION,
    ObjectTag.ASYNC_FUNCTION,
    ObjectTag.PROXY
  ].includes(tag);
}
