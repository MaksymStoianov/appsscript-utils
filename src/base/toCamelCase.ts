import { requireNonEmptyString } from "./requireNonEmptyString";

interface Options {
  clean?: boolean;
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
 * @param   value - The input string to convert.
 * @param   [options] - Optional configuration options.
 * @returns The string converted to camelCase.
 * @since   0.1.0
 * @version 0.1.0
 */
export function toCamelCase(value: string, options: Options = {}): string {
  const effectiveOptions: Required<Options> = {
    clean: true,
    firstWordToLowerCase: true,
    ...options
  };

  let result = requireNonEmptyString(value)
    .replace(
      /\b\w+\b/g,
      match => match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
    )
    .replace(/[\s-_]+/g, "");

  if (effectiveOptions.clean) {
    result = result.replace(/[^a-zA-Z0-9]/g, "");
  }

  if (effectiveOptions.firstWordToLowerCase) {
    result = result.charAt(0).toLowerCase() + result.slice(1);
  }

  return result;
}
