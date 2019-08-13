"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var worksSchema = new Schema({
  _id: String,
  title: String,
  image: String,
  content: String,
  technos: String
});

var _default = model('works', worksSchema);

exports["default"] = _default;