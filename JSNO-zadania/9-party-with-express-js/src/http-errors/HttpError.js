export default class HttpError extends Error {
  constructor(message, status = 500) {
    super(message);
    this.status = status;
  }

  // Common errors:
  static make404PathNotFound() {
    return new HttpError("Path not found!", 404);
  }
}
