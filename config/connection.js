const { connect, connection } = require("mongoose");

connect("mongodb://localhost/testing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
