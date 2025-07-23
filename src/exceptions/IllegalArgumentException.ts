import { RuntimeException } from "./RuntimeException";

export class IllegalArgumentException extends RuntimeException {
  constructor(message?: string | undefined) {
    super(message || "Invalid argument");
    const target = new.target;
    this.name = target.name;
    Object.setPrototypeOf(this, target.prototype);
  }
}
