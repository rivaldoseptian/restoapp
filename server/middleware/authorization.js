async function authorization(req, res, next) {
  try {
    if (req.user.role !== "Staff") {
      throw { name: "Forbiden" };
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = authorization;
