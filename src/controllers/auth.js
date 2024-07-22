const db = require('../db');
const { hash } = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const { sign } = require('jsonwebtoken');
const { SECRET } = require('../constants');

exports.getUsers = async (req, res) => {
  try {
    const { rows } = await db.query(
      'select user_id, email, created_at from users'
    );

    return res.status(200).json({
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await hash(password, 10);
    await db.query('insert into users(email, password) values($1 , $2)', [
      email,
      hashedPassword,
    ]);

    res.status(200).json({
      success: true,
      message: 'The registration was successful',
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  let user = req.user;
  let payload = {
    id: user.user_id,
    email: user.email,
  };
  try {
    const token = await jwt.sign(payload, SECRET);

    return res
      .status(200)
      .cookie('token', token, {
        httpOnly: true,
      })
      .json({
        success: true,
        message: 'Logged in successfully',
        user: payload,
      });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: error.message,
    });
  }
};
