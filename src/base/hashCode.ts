import { isNumber } from "./isNumber";
import { isString } from "./isString";

/**
 * Computes a 32-bit hash code for a given value.
 *
 * @param   value - The string or number to compute the hash for.
 * @returns The computed 32-bit hash code.
 * @since   0.1.0
 * @version 0.1.0
 */
export function hashCode(value: string | number): number {
  if (!isString(value) && !isNumber(value)) {
    throw new TypeError("Input must be a string or a number.");
  }

  const str = String(value);
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
