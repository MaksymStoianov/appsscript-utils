# Utilities for Google Apps Script Projects

A set of utilities for **Google Apps Script**, as well as common functions for working with data, strings, validation
and
more. This project aims to simplify development in the Apps Script environment and provide frequently used functions in
one place.

## How to Install

To get started, install the dependencies:

```bash
npm install github:MaksymStoianov/appsscript-utils#main
```

> **Note:** It's recommended to use tags (`#vX.Y.Z`) for production environments to ensure version stability.

For example:

```bash
npm install github:MaksymStoianov/appsscript-utils#v1.0.1
```

## Functions by Category

### 1. `appsscript` Module

Functions specifically designed for Google Apps Script environments, including utilities for working with spreadsheets.

<details open><summary>Functions</summary>

#### 1.1. `appsscript/base`

<details open><summary>Functions</summary>

| Function                                                         | Description                                                                                                       |
|:-----------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------|
| [`checkMultipleAccount`](src/appsscript/checkMultipleAccount.ts) | Checks if multiple Google accounts are in use.                                                                    |
| [`getByteSize`](src/appsscript/getByteSize.ts)                   | Returns the size of a string in bytes.                                                                            |
| [`isHtmlOutput`](src/appsscript/isHtmlOutput.ts)                 | Checks if an object is an [`HtmlOutput`](https://developers.google.com/apps-script/reference/html/html-output).   |
| [`isTextOutput`](src/appsscript/isTextOutput.ts)                 | Checks if an object is a [`TextOutput`](https://developers.google.com/apps-script/reference/content/text-output). |
| [`isUi`](src/appsscript/isUi.ts)                                 | Checks if an object is a `Ui`.                                                                                    |

</details>

#### 1.2. `appsscript/sheets` (Google Sheets Utilities)

A collection of functions to simplify working with Google Sheets.

<details open><summary>Functions</summary>

| Function                                                                          | Description                                                                                                                      |
|:----------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| [`appendColumn`](src/appsscript/sheets/appendColumn.ts)                           | Appends a single column of data to the sheet.                                                                                    |
| [`appendColumns`](src/appsscript/sheets/appendColumns.ts)                         | Appends multiple columns of data to the sheet.                                                                                   |
| [appendRow](src/appsscript/sheets/appendRow.ts)                                   | Appends a single row of data to the sheet.                                                                                       |
| [`appendRows`](src/appsscript/sheets/appendRows.ts)                               | Appends multiple rows of data to the sheet.                                                                                      |
| [`convertRichTextToHtml`](src/appsscript/sheets/convertRichTextToHtml.ts)         | Converts a [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value) to an HTML string. |
| [`doGridRangesIntersect`](src/appsscript/sheets/doGridRangesIntersect.ts)         | Checks if two [`GridRange`](src/appsscript/sheets/types/GridRange.ts) objects intersect.                                         |
| [`getColumnIndexByLetter`](src/appsscript/sheets/getColumnIndexByLetter.ts)       | Gets the column index by its letter (e.g., 'A' -> 1).                                                                            |
| [`getColumnLetterByIndex`](src/appsscript/sheets/getColumnLetterByIndex.ts)       | Gets the column letter by its index (e.g., 1 -> 'A').                                                                            |
| [`getColumnLetterByPosition`](src/appsscript/sheets/getColumnLetterByPosition.ts) | Gets the column letter by its position.                                                                                          |
| [`getColumnPositionByLetter`](src/appsscript/sheets/getColumnPositionByLetter.ts) | Gets the column position by its letter.                                                                                          |
| [`getSheetById`](src/appsscript/sheets/getSheetById.ts)                           | Gets a sheet by its ID.                                                                                                          |
| [`highlightHtml`](src/appsscript/sheets/highlightHtml.ts)                         | Adds syntax highlighting to an HTML string.                                                                                      |
| [`isCellGridRange`](src/appsscript/sheets/isCellGridRange.ts)                     | Checks if a [`GridRange`](src/appsscript/sheets/types/GridRange.ts) represents a single cell.                                    |
| [`isGridRangeContainedIn`](src/appsscript/sheets/isGridRangeContainedIn.ts)       | Checks if one [`GridRange`](src/appsscript/sheets/types/GridRange.ts) is contained within another.                               |
| [`isGridRangeSameDimensions`](src/appsscript/sheets/isGridRangeSameDimensions.ts) | Checks if two [`GridRange`](src/appsscript/sheets/types/GridRange.ts) objects have the same dimensions.                          |
| [`isRange`](src/appsscript/sheets/isRange.ts)                                     | Checks if an object is a [`Range`](https://developers.google.com/apps-script/reference/document/range).                          |
| [`isRichTextValue`](src/appsscript/sheets/isRichTextValue.ts)                     | Checks if an object is a [`RichTextValue`](https://developers.google.com/apps-script/reference/spreadsheet/rich-text-value).     |
| [`isSheet`](src/appsscript/sheets/isSheet.ts)                                     | Checks if an object is a [`Sheet`](https://developers.google.com/apps-script/reference/spreadsheet/sheet).                       |
| [`isSpreadsheet`](src/appsscript/sheets/isSpreadsheet.ts)                         | Checks if an object is a [`Spreadsheet`](https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet).           |
| [`isTextStyle`](src/appsscript/sheets/isTextStyle.ts)                             | Checks if an object is a [`TextStyle`](https://developers.google.com/apps-script/reference/slides/text-style).                   |
| [`isValidSheetName`](src/appsscript/sheets/isValidSheetName.ts)                   | Checks if a sheet name is valid.                                                                                                 |
| [`isValidSpreadsheetId`](src/appsscript/sheets/isValidSpreadsheetId.ts)           | Checks if a spreadsheet ID is valid.                                                                                             |
| [`parseA1Notation`](src/appsscript/sheets/parseA1Notation.ts)                     | Parses an A1 notation (e.g., 'A1:B2') into [`GridRange`](src/appsscript/sheets/types/GridRange.ts) components.                   |
| [`prependRow`](src/appsscript/sheets/prependRow.ts)                               | Prepends a single row of data to the sheet.                                                                                      |
| [`prependRows`](src/appsscript/sheets/prependRows.ts)                             | Prepends multiple rows of data to the sheet.                                                                                     |
| [`toA1Notation`](src/appsscript/sheets/toA1Notation.ts)                           | Converts a [`GridRange`](src/appsscript/sheets/types/GridRange.ts) to A1 notation.                                               |

</details>

</details>

### 2. `base` Module

General utility functions that can be useful in any JavaScript/TypeScript project.

<details open><summary>Functions</summary>

| Function                | Description                                                                    |
|:------------------------|:-------------------------------------------------------------------------------|
| `chunk`                 | Splits an array into chunks of a specified size.                               |
| `decodeHtml`            | Decodes HTML entities.                                                         |
| `encodeHtml`            | Encodes a string for safe use in HTML.                                         |
| `escapeHtml`            | Escapes HTML special characters.                                               |
| `escapeRegExp`          | Escapes special characters for use in regular expressions.                     |
| `escapeXml`             | Escapes XML special characters.                                                |
| `hashCode`              | Calculates a hash code for a string.                                           |
| `is2DArray`             | Checks if a variable is a 2D array.                                            |
| `isBoolean`             | Checks if a variable is a boolean value.                                       |
| `isConsistent2DArray`   | Checks if a 2D array has consistent inner array lengths.                       |
| `isEmail`               | Checks if a string is a valid email address.                                   |
| `isEmpty`               | Checks if a value is empty (for strings, arrays, objects).                     |
| `isException`           | Checks if an object is an instance of `Exception` or its subclass.             |
| `isFunction`            | Checks if a variable is a function.                                            |
| `isLength`              | Checks if a value is "length-like" (arrays, strings, etc.).                    |
| `isNil`                 | Checks if a value is `null` or `undefined`.                                    |
| `isNull`                | Checks if a value is `null`.                                                   |
| `isNumber`              | Checks if a variable is a number.                                              |
| `isNumberLike`          | Checks if a value can be converted to a number.                                |
| `isObject`              | Checks if a variable is an object (but not `null` or an array).                |
| `isObjectLike`          | Checks if a variable is object-like (objects, arrays, functions).              |
| `isRegExp`              | Checks if a variable is a regular expression.                                  |
| `isScalar`              | Checks if a variable is a scalar value (string, number, boolean, symbol).      |
| `isString`              | Checks if a variable is a string.                                              |
| `isSymbol`              | Checks if a variable is a symbol.                                              |
| `isUndefined`           | Checks if a value is `undefined`.                                              |
| `isUrl`                 | Checks if a string is a valid URL.                                             |
| `isValidLocale`         | Checks if a string is a valid locale code.                                     |
| `isValidSlug`           | Checks if a string is a valid "slug" (URL-friendly string).                    |
| `isValidVersion`        | Checks if a string is a valid version number (semantic versioning).            |
| `isVersionCompatible`   | Checks version compatibility.                                                  |
| `nonNil`                | Returns the value if not `null` or `undefined`, otherwise throws an exception. |
| `nonNull`               | Returns the value if not `null`, otherwise throws an exception.                |
| `nonNumber`             | Returns the value if not a number, otherwise throws an exception.              |
| `nonString`             | Returns the value if not a string, otherwise throws an exception.              |
| `parseJson`             | Safely parses a JSON string.                                                   |
| `requireNonEmptyString` | Checks if a string is non-empty, otherwise throws an exception.                |
| `requireNonNull`        | Checks that a value is not `null`, otherwise throws an exception.              |
| `requireString`         | Checks that a value is a string, otherwise throws an exception.                |
| `requireValidEmail`     | Checks that a string is a valid email, otherwise throws an exception.          |
| `stringifyJson`         | Safely converts an object to a JSON string.                                    |
| `toCamelCase`           | Converts a string to camelCase.                                                |
| `toInteger`             | Converts a value to an integer.                                                |
| `toKebabCase`           | Converts a string to kebab-case.                                               |
| `toLowerCase`           | Converts a string to lowercase.                                                |
| `toProperCase`          | Converts a string to Proper Case (first letter of each word capitalized).      |
| `toSnakeCase`           | Converts a string to snake_case.                                               |
| `toString`              | Converts a value to a string.                                                  |
| `toUpperCase`           | Converts a string to uppercase.                                                |
| `transpose`             | Transposes a 2D array (matrix).                                                |
| `versionCompare`        | Compares two versions.                                                         |

</details>

### 3. `exceptions` Module

A set of custom exception classes for more specific error handling.

<details open><summary>Functions</summary>

| Exception                     | Description                         |
|:------------------------------|:------------------------------------|
| `Exception`                   | Base exception class.               |
| `RuntimeException`            | Exception for runtime errors.       |
| `EmptyStringException`        | Exception for empty strings.        |
| `IllegalArgumentException`    | Exception for invalid arguments.    |
| `InvalidEmailFormatException` | Exception for invalid email format. |
| `NullPointerException`        | Exception for `null` values.        |

</details>

### 4. `interfaces` Module

Descriptions of general interfaces.

<details open><summary>Functions</summary>

| Interface  | Description              |
|:-----------|:-------------------------|
| `Iterator` | Interface for iterators. |

</details>

### 5. `path` Module

Functions for working with file paths and URLs.

<details open><summary>Functions</summary>

| Function        | Description                                                     |
|:----------------|:----------------------------------------------------------------|
| `isAbsolute`    | Checks if a path is absolute.                                   |
| `isRelative`    | Checks if a path is relative.                                   |
| `isValidDomain` | Checks if a string is a valid domain name.                      |
| `join`          | Joins multiple path segments.                                   |
| `normalize`     | Normalizes a path, resolving `.` and `..`.                      |
| `parse`         | Parses a path into its components (root, dir, base, ext, name). |

</details>

## TODO

<details><summary>More</summary>

- [ ] `appsscript/sheets/prependColumn`
- [ ] `appsscript/sheets/prependColumns`
- [ ] `appsscript/sheets/insertSchema`
- [ ] `appsscript/sheets/getSchema`
- [ ] `appsscript/sheets/removeSchema`
- [ ] `appsscript/sheets/getValues`
- [ ] `appsscript/sheets/clearColumnsByConditional`
- [ ] `appsscript/sheets/clearRowsByConditional`
- [ ] `appsscript/sheets/deleteRowsByConditional`
- [ ] `appsscript/sheets/deleteColumnsByConditional`
- [ ] `appsscript/sheets/updateFormulas`
- [ ] `appsscript/sheets/updateFormulas`
- [ ] `appsscript/sheets/abstract/Sheet`
- [ ] `appsscript/net/abstract/URL`
- [ ] `appsscript/net/abstract/URLSearchParams`
- [ ] `appsscript/base/sprintf`
- [ ] `appsscript/crypto/base64decode`
- [ ] `appsscript/crypto/base64encode`
- [ ] `appsscript/crypto/md5`
- [ ] `appsscript/crypto/sha1`
- [ ] `appsscript/crypto/sha256`
- [ ] `appsscript/crypto/sha512`
- [ ] `appsscript/base/formatDate`
- [ ] `base/date/now`
- [ ] `base/date/diff`
- [ ] `base/date/getDaysInMonth`
- [ ] `base/date/getDaysLeftInMonth`
- [ ] `base/date/offset`
- [ ] `base/date/offset`

</details>
