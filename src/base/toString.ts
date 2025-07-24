/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @param   value - The value to convert.
 * @returns The converted string.
 * @since   0.1.0
 * @version 0.1.0
 */
export function toString(value: unknown): string {
  return Object.prototype.toString.call(value);
}
