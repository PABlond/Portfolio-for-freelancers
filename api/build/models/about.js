"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema,
    model = _mongoose["default"].model;
var aboutSchema = new Schema({
  //   _id: String,
  img: {
    href: String,
    alt: String
  },
  description: [{
    content: String
  }],
  skills: [{
    title: String,
    nodes: [{
      id: String,
      group: Number
    }],
    links: [{
      source: String,
      target: String,
      value: Number
    }]
  }],
  certifications: [{
    original: String,
    thumbnail: String
  }]
});

var _default = model("about", aboutSchema);

exports["default"] = _default;