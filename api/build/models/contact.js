"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var contactSchema = new Schema({
  name: String,
  email: String,
  content: String,
  isRead: {
    type: Boolean,
    "default": false
  },
  at: {
    type: Date,
    "default": Date.now
  }
});

var _default = model('contact', contactSchema);

exports["default"] = _default;