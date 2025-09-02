import { isConsistent2DArray } from "./isConsistent2DArray";

/**
 * ## transpose
 *
 * Transposes a two-dimensional array (matrix), effectively swapping its rows and columns.
 *
 * @example
 * ```typescript
 * const arr = [
 *   [1, 2, 3],
 *   [4, 5, 6],
 *   [7, 8, 9]
 * ];
 *
 * const result = transpose(arr);
 * // [
 * //   [1, 4, 7],
 * //   [2, 5, 8],
 * //   [3, 6, 9]
 * // ]
 * ```
 *
 * @param   arr - The 2D array (matrix) to transpose. Its elements can be of any type.
 * @returns A new 2D array representing the transposed matrix. The elements maintain their original types.
 * @since   1.0.0
 * @version 1.0.0
 */
export function transpose(arr: unknown): Array<Array<unknown>> {
  if (!Array.isArray(arr)) {
    throw new TypeError(); // FIXME: Add message.
  }

  if (!isConsistent2DArray(arr)) {
    throw new Error("All rows must have the same length.");
  }

  return arr[0].map((_, colIndex) => arr.map(row => row[colIndex]));
}
