export const isAuthenticated = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.send(401);
  }
};
