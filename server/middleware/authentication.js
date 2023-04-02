const { verifyToken } = require("../helpers/jwt.js");
const { User } = require("../models");

async function authentication(req, res, next) {
  try {
    let access_token = req.headers.access_token;
    console.log(access_token);
    if (!access_token) throw { name: "Unauthenticated" };

    let playload = verifyToken(access_token);
    let user = await User.findByPk(playload.id);

    if (!user) throw { name: "Unauthenticated" };

    req.user = {
      id: user.id,
      email: user.email,
      role: user.role,
    };

    next();
  } catch (error) {
    next(error);
  }
}
module.exports = authentication;
