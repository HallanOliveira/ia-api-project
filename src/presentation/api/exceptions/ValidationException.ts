export class ValidationException extends Error {
  public status: number;

  constructor(message: string) {
    super(message);
    this.name = "ValidationException";
    this.status = 400;
  }
}
