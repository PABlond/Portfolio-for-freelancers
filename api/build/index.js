"use strict";
require("babel-polyfill");
var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _graphQLSchema = _interopRequireDefault(require("./schema/graphQLSchema"));

var _expressGraphql = _interopRequireDefault(require("express-graphql"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var _process$env = process.env,
    PORT = _process$env.PORT,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD;
app.use((0, _cors["default"])());

_mongoose["default"].connect("mongodb://".concat(DB_USER, ":").concat(DB_PASSWORD, "@ds119090.mlab.com:19090/pablond-portfolio"), {
  useNewUrlParser: true
}, function () {
  return console.log("Database is connected");
});

app.use("/graphql", (0, _expressGraphql["default"])({
  schema: _graphQLSchema["default"],
  graphiql: true
}));
app.listen(PORT, function () {
  console.log("Server is listening on port ".concat(PORT));
});