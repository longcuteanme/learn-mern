const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(400).json({
      status: "error",
      elements: "Missisng Token",
      code: 400,
    });
  }

  const listToken = authHeader && authHeader.split(" ");
  if (listToken[0] !== "Bearer") {
    return res.status(400).json({
      status: "error",
      elements: "Invalit Token split authorization",
      code: 400,
    });
  }

  const token = listToken[1];

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, process.env.secret_key);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json(err);
  }
};

module.exports = { verifyToken };
