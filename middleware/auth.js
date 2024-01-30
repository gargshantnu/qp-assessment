const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY || "my_secret_key";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decodedToken = jwt.verify(token, secretKey);
    req.userData = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
};
