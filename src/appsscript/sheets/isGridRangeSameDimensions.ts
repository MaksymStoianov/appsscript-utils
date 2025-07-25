import { GridRange } from "./types";

/**
 * Checks if two {@link GridRange} objects have the exact same number of rows and columns.
 *
 * @param       range1 - The first {@link GridRange} object.
 * @param       range2 - The second {@link GridRange} object.
 * @returns    `true` if both ranges are well-defined and have the identical height (number of rows) and width (number of columns), `false` otherwise.
 * @since       0.1.0
 * @version     0.1.0
 * @environment `Google Apps Script`, `Browser`
 */
export function isGridRangeSameDimensions(
  range1: GridRange,
  range2: GridRange
): boolean {
  const getDimensions = (range: GridRange) => {
    if (
      range.startRowIndex === null ||
      range.startRowIndex === undefined ||
      range.endRowIndex === null ||
      range.endRowIndex === undefined ||
      range.startColumnIndex === null ||
      range.startColumnIndex === undefined ||
      range.endColumnIndex === null ||
      range.endColumnIndex === undefined
    ) {
      return null;
    }

    const height = range.endRowIndex - range.startRowIndex;
    const width = range.endColumnIndex - range.startColumnIndex;

    if (height < 0 || width < 0) {
      return null;
    }

    return { height, width };
  };

  const dimensions1 = getDimensions(range1);
  const dimensions2 = getDimensions(range2);

  if (dimensions1 === null || dimensions2 === null) {
    return false;
  }

  return (
    dimensions1.height === dimensions2.height &&
    dimensions1.width === dimensions2.width
  );
}
