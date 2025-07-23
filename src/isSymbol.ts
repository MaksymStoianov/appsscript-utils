/**
 * Checks if the provided value is a `Symbol`.
 *
 * @param   value - The value to check.
 * @returns `true` if the value is a `Symbol`; otherwise, `false`.
 * @since   0.1.0
 * @version 0.1.0
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === "symbol";
}
