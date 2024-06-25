const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { query } = require('../utils/db');
require('dotenv').config();

const login = async (req, res) => {
  const { id, password } = req.body;
  try {
    const result = await query('SELECT * FROM users WHERE id = $1', [id]);
    const user = result.rows[0];
    if (!user) return res.status(400).send('Invalid credentials');

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).send('Error logging in');
  }
};

const changePassword = async (req, res) => {
  const { id, oldPassword, newPassword } = req.body;
  try {
    const result = await query('SELECT * FROM users WHERE id = $1', [id]);
    const user = result.rows[0];
    if (!user) return res.status(400).send('User not found');

    const validPassword = await bcrypt.compare(oldPassword, user.password);
    if (!validPassword) return res.status(400).send('User not found');

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);
    await query('UPDATE users SET password = $1 WHERE id = $2', [hashedNewPassword, id]);
    res.send('Password updated successfully');
  } catch (err) {
    res.status(500).send('Error changing password');
  }
};

const protectedRoute = (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
};

module.exports = { login, changePassword, protectedRoute };
