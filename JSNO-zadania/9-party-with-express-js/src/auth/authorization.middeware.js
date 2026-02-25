import HttpError from "../http-errors/HttpError.js";

export function authorizationMiddleware(req, res, next) {
  // console.log("User hit enpoint", req.url, req.method);
  const auth = req.header("authorization");

  if (auth !== "secr3t") {
    // return res.redirect('/long-in')
    throw new HttpError("You SHALL NOT PASS", 401);
  }

  req.user = { id: 2, name: 'fake'} // w logice powinno być w auth.service.js
  // KONIECZNE!
  next();
}
