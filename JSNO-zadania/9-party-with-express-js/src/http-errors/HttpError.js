
// Można skorzystać z gotowca, sprawdź: https://www.npmjs.com/package/http-errors
export default class HttpError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
    this.timestamp = new Date()
  }

  // Common errors:
  static make404PathNotFound() {
    return new HttpError("Path not found!", 404);
  }
}
