/**
 * Defines the options for the `toCamelCase` function.
 */
interface ToCamelCaseOptions {
  /**
   * If `true` (default), removes any characters that are not letters or numbers
   * after the initial word transformation.
   */
  clean?: boolean;

  /**
   * If `true` (default), converts the first letter of the resulting string to lowercase.
   * If `false`, the first letter will remain uppercase (e.g., "HelloWorld").
   */
  firstWordToLowerCase?: boolean;
}

/**
 * Converts a string to `camelCase` format.
 *
 * `camelCase` is a naming convention where the first letter of each word (except
 * potentially the very first word) is capitalized, and all spaces, hyphens,
 * and underscores are removed.
 *
 * By default, the resulting string's first letter is converted to lowercase.
 *
 * #### Example (Default Behavior)
 * ```javascript
 * const text = "Hello world! How are you?";
 * const result = toCamelCase(text);
 *
 * console.log(result); // helloWorldHowAreYou
 * ```
 *
 * #### Example (Keeping first letter uppercase)
 * ```javascript
 * const text = "Hello world!";
 * const result = toCamelCase(text, { firstWordToLowerCase: false });
 *
 * console.log(result); // HelloWorld
 * ```
 *
 * @param   input - The input string to convert.
 * @param   [options] - Optional configuration options.
 * @returns The string converted to camelCase.
 */
export function toCamelCase(input: string, options: ToCamelCaseOptions = {}) {
  const effectiveOptions: Required<ToCamelCaseOptions> = {
    clean: true,
    firstWordToLowerCase: true,
    ...options
  };

  let result = input.replace(
    /\b\w+\b/g,
    match => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
  );

  result = result.replace(/[\s-_]+/g, "");

  if (effectiveOptions.clean) {
    result = result.replace(/[^a-zA-Z0-9]/g, "");
  }

  if (effectiveOptions.firstWordToLowerCase) {
    result = result.charAt(0).toLowerCase() + result.slice(1);
  }

  return result;
}
