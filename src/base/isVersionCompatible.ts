import { versionCompare } from "./versionCompare";

/**
 * ## isVersionCompatible
 *
 * Checks if the current version is compatible with a required minimum version.
 *
 * @param   currentVersion - The version currently in use or being checked.
 * @param   requiredVersion - The minimum version that is required for compatibility.
 * @returns `true` if the `currentVersion` is greater than or equal to the `requiredVersion`; otherwise, `false`.
 * @throws  {TypeError} If `currentVersion` or `requiredVersion` are not valid version strings as determined by `versionCompare` (which relies on `isValidVersion`).
 * @since   1.0.0
 * @version 1.0.0
 */
export function isVersionCompatible(
  currentVersion: string,
  requiredVersion: string
): boolean {
  return versionCompare(currentVersion, requiredVersion) >= 0;
}
