const express = require("express");

const { PORT } = require("./constants");

// import routes
const authRoutes = require("./routes/auth");

const app = express();

app.use("/api", authRoutes);

// app start
const appStart = () => {
  try {
    app.listen(PORT, () => {
      console.log(`The app is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

appStart();
