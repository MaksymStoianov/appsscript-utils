import { Exception } from "./Exception";

/**
 * Represents an exception thrown when a string is expected but is `null`, `undefined`, or empty.
 */
export class EmptyStringException extends Exception {
  constructor(message?: string | undefined) {
    super(message || "String is null, undefined, or empty.");
    const target = new.target;
    this.name = target.name;
    Object.setPrototypeOf(this, target.prototype);
  }
}
