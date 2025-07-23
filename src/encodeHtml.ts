import { isString } from "@/isString";

/**
 * Кодирует символы строки (от `U+00A0` до `U+9999`) в соответствующие HTML-сущности.
 *
 * @param   value - Строка для кодирования.
 * @returns Строка с закодированными в HTML-сущности символами.
 * @since   0.1.0
 * @version 0.1.0
 */
export function encodeHtml(value: string): string {
  if (!isString(value)) {
    // TODO: exception
    throw new TypeError();
  }

  return value.replace(
    /([\u00A0-\u9999<>&])(.|$)/g,
    function (full, char, next) {
      if (char !== "&" || next !== "#") {
        if (/[\u00A0-\u9999<>&]/.test(next)) {
          next = `&#${next.charCodeAt(0)};`;
        }

        return `&#${char.charCodeAt(0)};${next}`;
      }

      return full;
    }
  );
}
