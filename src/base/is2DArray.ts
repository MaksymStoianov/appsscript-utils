import { isEmpty } from "./isEmpty";

/**
 * Checks if the given input is a non-empty two-dimensional array, meaning it's an array where ***all*** its elements are also arrays.
 *
 * This function first ensures the input itself is an array. If not, it throws a `TypeError`.
 *
 * @param   arr - The input to check.
 * @returns `true` if the input is a non-empty array where all its elements are arrays; otherwise, `false`.
 * If `true`, TypeScript will **narrow the type of `arr`** to `Array<Array<unknown>>`,
 * allowing safer access to its elements as arrays.
 * @throws  {TypeError} If the input `arr` is not an array.
 */
export function is2DArray(arr: unknown): arr is Array<Array<unknown>> {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return !isEmpty(arr) && arr.every(item => Array.isArray(item));
}
