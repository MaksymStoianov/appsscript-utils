import { RuntimeException } from "./RuntimeException";

/**
 * Represents an exception thrown when a method has been passed an illegal or inappropriate argument.
 *
 * @since   0.1.0
 * @version 0.1.0
 */
export class IllegalArgumentException extends RuntimeException {
  constructor(message?: string | undefined) {
    super(message || "Invalid argument");
    const target = new.target;
    this.name = target.name;
    Object.setPrototypeOf(this, target.prototype);
  }
}
