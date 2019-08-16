"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _certification = _interopRequireDefault(require("./../models/certification"));

var _graphqlTools = require("graphql-tools");

var _work = _interopRequireDefault(require("./../models/work"));

var _user = _interopRequireDefault(require("./../models/user"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _header2 = _interopRequireDefault(require("./../models/header"));

var _about2 = _interopRequireDefault(require("./../models/about"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var typeDefs = "\n    type Header{\n      _id: String,\n      name: String!,\n      title: String!,\n      subtitle: String!\n    }\n    type ImgAbout {\n      href: String,\n      alt: String\n    }\n    type SkillNode {\n      id: String,\n      group: Int\n    }\n    type LinksNode {\n      source: String,\n      target: String,\n      value: Int\n    }\n    type Skills {\n      title: String,\n      nodes: [SkillNode],\n      links: [LinksNode]\n    }\n    type AboutDescription {\n      content: String,\n    }\n    type About {\n      img: ImgAbout,\n      certifications: [Certification],\n      skills: [Skills]\n      description: [AboutDescription]\n    }\n    type Certification{\n        _id: String,\n        original: String,\n        thumbnail: String\n    }\n    type Work{\n        _id: String,\n        title: String!,\n        image: String!,\n        content: String!,\n        technos: String!\n    }\n    type User {\n      id: Int!\n      username: String!\n      email: String!\n    }\n    type Query{\n        about: About,\n        header: Header,\n        certifications: [Certification],\n        works: [Work],\n        certification(_id: String): Certification\n        login (username: String!, password: String!): String\n    }\n";
var resolvers = {
  Query: {
    about: function () {
      var _about = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _about2["default"].find({});

              case 2:
                data = _context.sent;
                return _context.abrupt("return", data[data.length - 1]);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function about(_x, _x2, _x3, _x4) {
        return _about.apply(this, arguments);
      }

      return about;
    }(),
    header: function () {
      var _header = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _header2["default"].find({});

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data[data.length - 1]);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function header(_x5, _x6, _x7, _x8) {
        return _header.apply(this, arguments);
      }

      return header;
    }(),
    certifications: function () {
      var _certifications = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _certification["default"].find({});

              case 2:
                data = _context3.sent;
                return _context3.abrupt("return", data);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function certifications(_x9, _x10, _x11, _x12) {
        return _certifications.apply(this, arguments);
      }

      return certifications;
    }(),
    works: function () {
      var _works = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _work["default"].find({});

              case 2:
                data = _context4.sent;
                return _context4.abrupt("return", data);

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function works(_x13, _x14, _x15, _x16) {
        return _works.apply(this, arguments);
      }

      return works;
    }(),
    login: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(root, args, context, info) {
        var username, user, JWT_SECRET, token;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                username = args.username;
                _context5.next = 3;
                return _user["default"].findOne({
                  username: username
                });

              case 3:
                user = _context5.sent;

                if (!Object.keys(user).length) {
                  _context5.next = 9;
                  break;
                }

                if (!_bcrypt["default"].compareSync(args.password, user.password)) {
                  _context5.next = 9;
                  break;
                }

                JWT_SECRET = process.env.JWT_SECRET;
                token = _jsonwebtoken["default"].sign({
                  username: username
                }, JWT_SECRET);
                return _context5.abrupt("return", token);

              case 9:
                return _context5.abrupt("return", new Error(404));

              case 10:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function login(_x17, _x18, _x19, _x20) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }
};

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});

exports["default"] = _default;