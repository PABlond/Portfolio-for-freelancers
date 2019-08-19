"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _aboutType = _interopRequireDefault(require("./aboutType"));

var _headerType = _interopRequireDefault(require("./headerType"));

var _worksType = _interopRequireDefault(require("./worksType"));

var _contactType = _interopRequireDefault(require("./contactType"));

var _authType = _interopRequireDefault(require("./authType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = "\n".concat(_headerType["default"], "\n").concat(_aboutType["default"], "\n").concat(_worksType["default"], "\n").concat(_contactType["default"], "\n").concat(_authType["default"], "\ntype Query{\n    contact (token: String): [Contact]\n    about: About,\n    header: Header,\n    certifications: [Certification],\n    works: [Work],\n    certification(_id: String): Certification\n    login (username: String!, password: String!): String\n    setAboutDesc (description: [String], token: String): About\n    setWorks (works: [String], token: String): [Work]\n    setHeader (name: String, title: String, subtitle: String, token: String): Header\n    sendMessage (name: String, email: String, content: String): String\n    isRead (_id: String, token: String): [Contact]\n}\n");

exports["default"] = _default;