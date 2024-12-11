export class NotFoundError extends Error {
  constructor(message: string = "There are no flight indicators in DB.") {
    super(message);
    this.name = "NotFoundError";
  }
}
