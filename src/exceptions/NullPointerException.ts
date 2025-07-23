import { RuntimeException } from "./RuntimeException";

export class NullPointerException extends RuntimeException {
  constructor(message?: string | undefined) {
    super(message || "Object is null or undefined.");
    const target = new.target;
    this.name = target.name;
    Object.setPrototypeOf(this, target.prototype);
  }
}
