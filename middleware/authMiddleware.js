const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
dotenv.config();

const secret = process.env.AUTH_SECRET;

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).send('Access denied');

  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid token');
  }
};

module.exports = authMiddleware;
