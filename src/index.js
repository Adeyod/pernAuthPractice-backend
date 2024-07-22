const express = require('express');
const cookieParser = require('cookie-parser');

const { PORT } = require('./constants');

// import routes
const authRoutes = require('./routes/auth');

const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);

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
