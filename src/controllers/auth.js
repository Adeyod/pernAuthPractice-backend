const db = require("../db");

exports.getUsers = async (req, res) => {
  try {
    const response = await db.query("select * from users");
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
};

// 25:50
// PERN authentication full course(backend)
