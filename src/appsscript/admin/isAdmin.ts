import { nonFunction } from "../../base";

/**
 * ## isAdmin
 *
 * Checks if the current user is an administrator of the Google Workspace domain.
 * Requires the `Admin SDK Directory Service` to be enabled.
 *
 * @returns `true` if the user is an administrator; otherwise, `false`.
 */
export function isAdmin(): boolean {
  try {
    if (nonFunction(AdminDirectory?.Users?.get)) {
      throw new Error(
        "Admin SDK Directory Service is not available or not enabled."
      );
    }

    const email = Session.getActiveUser().getEmail();
    const user = AdminDirectory.Users.get(email);

    return !!user.isAdmin;
  } catch (err: unknown) {
    console.warn(`[Error]: ${err}`);
    return false;
  }
}
