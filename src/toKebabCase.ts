/**
 * Defines the options for the `toKebabCase` function.
 */
interface ToKebabCaseOptions {
  /**
   * If `true` (default: `false`), removes any characters from the final string
   * that are not lowercase letters, numbers, or hyphens. This results in a strict
   * kebab-case format. If `false`, other characters from the input might be preserved.
   */
  clean?: boolean;

  /**
   * If `true` (default: `false`), trims leading and trailing whitespace
   * from the original input string before conversion.
   */
  trim?: boolean;
}

/**
 * Converts a string to `kebab-case` format.
 *
 * `kebab-case` is a naming convention where words are separated by hyphens (`-`),
 * and all letters are in lowercase.
 *
 * This function handles spaces, underscores, and camelCase transitions by inserting hyphens.
 * It also cleans up multiple or leading/trailing hyphens.
 *
 * #### Example (Default Behavior)
 * ```javascript
 * const text = "Hello world! How are you?";
 * const result = toKebabCase(text);
 *
 * console.log(result); // hello-world!-how-are-you
 * ```
 *
 * #### Example (Strict Cleaning)
 * ```javascript
 * const text = "Hello world! How are you?";
 * const result = toKebabCase(text, { clean: true });
 *
 * console.log(result); // hello-world-how-are-you
 * ```
 *
 * @param   input - The input string to convert.
 * @param   [options] - Optional configuration options.
 * @returns The string converted to kebab-case.
 */
export function toKebabCase(
  input: string,
  options: ToKebabCaseOptions = {}
): string {
  const effectiveOptions: Required<ToKebabCaseOptions> = {
    clean: false,
    trim: false,
    ...options
  };
  let result = input
    .replace(/[\s_]/g, "-")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();

  if (effectiveOptions.clean !== false) {
    result = result.replace(/[^a-zA-Z0-9-]/g, "");
  }

  if (effectiveOptions.trim === true) {
    result = result.trim().replace(/-+/g, "-");
  }

  return result;
}
