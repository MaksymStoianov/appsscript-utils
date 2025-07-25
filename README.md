# Utilities for Google Apps Script Projects

A set of utilities for Google Apps Script, as well as common functions for working with data, strings, validation and
more. This project aims to simplify development in the Apps Script environment and provide frequently used functions in
one place.

## Functions by Category

### 1. `appsscript` Module

Functions specifically designed for Google Apps Script environments, including utilities for working with spreadsheets.

| Function               | Description                                    |
|:-----------------------|:-----------------------------------------------|
| `checkMultipleAccount` | Checks if multiple Google accounts are in use. |
| `getByteSize`          | Returns the size of a string in bytes.         |
| `isHtmlOutput`         | Checks if an object is an `HtmlOutput`.        |
| `isTextOutput`         | Checks if an object is a `TextOutput`.         |
| `isUi`                 | Checks if an object is a `Ui`.                 |

#### 1.1. `appsscript/sheets` (Google Sheets Utilities)

A collection of functions to simplify working with Google Sheets.

| Function                    | Description                                                        |
|:----------------------------|:-------------------------------------------------------------------|
| `appendColumn`              | Appends a single column of data to the sheet.                      |
| `appendColumns`             | Appends multiple columns of data to the sheet.                     |
| `appendRow`                 | Appends a single row of data to the sheet.                         |
| `appendRows`                | Appends multiple rows of data to the sheet.                        |
| `convertRichTextToHtml`     | Converts a `RichTextValue` to an HTML string.                      |
| `doGridRangesIntersect`     | Checks if two `GridRange` objects intersect.                       |
| `getColumnIndexByLetter`    | Gets the column index by its letter (e.g., 'A' -> 1).              |
| `getColumnLetterByIndex`    | Gets the column letter by its index (e.g., 1 -> 'A').              |
| `getColumnLetterByPosition` | Gets the column letter by its position.                            |
| `getColumnPositionByLetter` | Gets the column position by its letter.                            |
| `getSheetById`              | Gets a sheet by its ID.                                            |
| `highlightHtml`             | Adds syntax highlighting to an HTML string.                        |
| `isCellGridRange`           | Checks if a `GridRange` represents a single cell.                  |
| `isGridRangeContainedIn`    | Checks if one `GridRange` is contained within another.             |
| `isGridRangeSameDimensions` | Checks if two `GridRange` objects have the same dimensions.        |
| `isRange`                   | Checks if an object is a `Range`.                                  |
| `isRichTextValue`           | Checks if an object is a `RichTextValue`.                          |
| `isSheet`                   | Checks if an object is a `Sheet`.                                  |
| `isSpreadsheet`             | Checks if an object is a `Spreadsheet`.                            |
| `isTextStyle`               | Checks if an object is a `TextStyle`.                              |
| `isValidSheetName`          | Checks if a sheet name is valid.                                   |
| `isValidSpreadsheetId`      | Checks if a spreadsheet ID is valid.                               |
| `parseA1Notation`           | Parses an A1 notation (e.g., 'A1:B2') into `GridRange` components. |
| `prependRow`                | Prepends a single row of data to the sheet.                        |
| `prependRows`               | Prepends multiple rows of data to the sheet.                       |
| `toA1Notation`              | Converts a `GridRange` to A1 notation.                             |

### 2. `base` Module

General utility functions that can be useful in any JavaScript/TypeScript project.

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

### 3. `exceptions` Module

A set of custom exception classes for more specific error handling.

| Exception                     | Description                         |
|:------------------------------|:------------------------------------|
| `EmptyStringException`        | Exception for empty strings.        |
| `Exception`                   | Base exception class.               |
| `IllegalArgumentException`    | Exception for invalid arguments.    |
| `InvalidEmailFormatException` | Exception for invalid email format. |
| `NullPointerException`        | Exception for `null` values.        |
| `RuntimeException`            | Exception for runtime errors.       |

### 4. `interfaces` Module

Descriptions of general interfaces.

| Interface  | Description              |
|:-----------|:-------------------------|
| `Iterator` | Interface for iterators. |

### 5. `path` Module

Functions for working with file paths and URLs.

| Function        | Description                                                     |
|:----------------|:----------------------------------------------------------------|
| `isAbsolute`    | Checks if a path is absolute.                                   |
| `isRelative`    | Checks if a path is relative.                                   |
| `isValidDomain` | Checks if a string is a valid domain name.                      |
| `join`          | Joins multiple path segments.                                   |
| `normalize`     | Normalizes a path, resolving `.` and `..`.                      |
| `parse`         | Parses a path into its components (root, dir, base, ext, name). | , dir, base, ext, name). |
