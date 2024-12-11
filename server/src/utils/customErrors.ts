/**
 * Custom error class for representing "Not Found" errors.
 *
 * This error is thrown when a requested resource or data is not found.
 * By default, it provides a specific message indicating that flight indicators
 * are not present in the database, but it can be customized.
 *
 * @extends {Error} Inherits from the base JavaScript Error class.
 */
export class NotFoundError extends Error {
  /**
   * Constructs a new NotFoundError instance.
   *
   * @param message - The error message describing the "Not Found" condition.
   *                  Defaults to: "There are no flight indicators in DB."
   */
  constructor(message: string = "There are no flight indicators in DB.") {
    super(message);
    this.name = "NotFoundError";
  }
}
