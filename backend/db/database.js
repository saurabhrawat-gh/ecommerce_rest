const mongoose = require("mongoose");

async function connect_db() {
  try {
    const response = await mongoose.connect(
      process.env.DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      `Database connected successfully with server: ${response.connection.host}`
    );
  } catch (err) {
    console.log({ error: err.message });
  }
}

module.exports = connect_db
