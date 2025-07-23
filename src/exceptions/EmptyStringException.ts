import { RuntimeException } from "./RuntimeException";

/**
 * Represents an exception thrown when a string is expected but is `null`, `undefined`, or empty.
 *
 * @since   0.1.0
 * @version 0.1.0
 */
export class EmptyStringException extends RuntimeException {
  constructor(message?: string | undefined) {
    super(message || "String is null, undefined, or empty.");
    const target = new.target;
    this.name = target.name;
    Object.setPrototypeOf(this, target.prototype);
  }
}
