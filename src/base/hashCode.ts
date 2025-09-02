import { isBoolean } from "./isBoolean";
import { isNull } from "./isNull";
import { isNumber } from "./isNumber";
import { isObject } from "./isObject";
import { isString } from "./isString";
import { isUndefined } from "./isUndefined";
import { stringifyJson } from "./stringifyJson";
import { toString } from "./toString";

/**
 * ## hashCode
 *
 * Computes a 32-bit hash code for a given value.
 *
 * @param   value - The input value to compute the hash for.
 * @returns The computed 32-bit hash code.
 * @since   1.0.0
 * @version 1.3.0
 */
export function hashCode(value: unknown): number {
  let str: string;

  if (isString(value) || isNumber(value) || isBoolean(value)) {
    str = String(value);
  } else if (value === null) {
    str = "null";
  } else if (isUndefined(value)) {
    str = "undefined";
  } else if (isNull(value)) {
    str = "null";
  } else if (isObject(value)) {
    try {
      str = toString(value) + stringifyJson(value);
    } catch (err) {
      console.warn("Could not stringify object for hashing:", err);
      str = String(value);
    }
  } else {
    throw new TypeError(`Unsupported input type for hashing: ${typeof value}.`);
  }

  let hash = 0;

  if (str.length === 0) {
    return hash;
  }

  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0;
  }

  return hash;
}
