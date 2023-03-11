const mongoose = require("mongoose");

function connect_db() {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(response => {
    console.log(
      `Database connected successfully with server: ${response.connection.host}`
    );
  })
}

module.exports = connect_db;
