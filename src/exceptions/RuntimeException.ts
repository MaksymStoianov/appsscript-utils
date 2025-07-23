import { Exception } from "./Exception";

/**
 * Represents an exception that may be thrown during normal operation.
 *
 * @since   0.1.0
 * @version 0.1.0
 */
export class RuntimeException extends Exception {
  constructor(message?: string | undefined) {
    super(message ?? "A runtime error occurred.");
    const target = new.target;
    this.name = target.name;
    Object.setPrototypeOf(this, target.prototype);
  }
}
