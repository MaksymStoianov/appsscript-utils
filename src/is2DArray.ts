import { isEmpty } from "./isEmpty";

/**
 * Checks if the given input is a non-empty two-dimensional array.
 *
 * For the purpose of this check, a two-dimensional array is defined as an array
 * that is **not empty** and whose **first element is also an array**.
 *
 * This function first ensures the input itself is an array. If not, it throws a `TypeError`.
 *
 * #### Example
 * ```typescript
 * is2DArray([]);                           // false (empty)
 * is2DArray([1, 2, 3]);                    // false (not an array of arrays)
 * is2DArray([['a', 'b'], ['c', 'd']]);     // true
 * is2DArray([[]]);                         // true (first element is an array, even if empty)
 * is2DArray("not an array");               // Throws TypeError
 * is2DArray(null);                         // Throws TypeError
 * ```
 *
 * @param   arr - The input to check.
 * @returns `true` if the input is a non-empty two-dimensional array; otherwise, `false`.
 * @throws  {TypeError} If the input `arr` is not an array.
 */
export function is2DArray(arr: unknown): boolean {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array.");
  }

  return !isEmpty(arr) && Array.isArray(arr[0]);
}
