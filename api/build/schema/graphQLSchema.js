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

var _contact2 = _interopRequireDefault(require("../models/contact"));

var _sendMail = _interopRequireDefault(require("./../utils/sendMail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var typeDefs = "\n    type Header{\n      _id: String,\n      name: String!,\n      title: String!,\n      subtitle: String!\n    }\n    type ImgAbout {\n      href: String,\n      alt: String\n    }\n    type SkillNode {\n      id: String,\n      group: Int\n    }\n    type LinksNode {\n      source: String,\n      target: String,\n      value: Int\n    }\n    type Skills {\n      title: String,\n      nodes: [SkillNode],\n      links: [LinksNode]\n    }\n    type AboutDescription {\n      content: String,\n    }\n    type About {\n      img: ImgAbout,\n      certifications: [Certification],\n      skills: [Skills]\n      description: [AboutDescription]\n    }\n    type Certification{\n        _id: String,\n        original: String,\n        thumbnail: String\n    }\n    type Work{\n        _id: String,\n        title: String!,\n        image: String!,\n        content: String!,\n        technos: String!\n    }\n    type User {\n      id: Int!\n      username: String!\n      email: String!\n    }\n    type Contact {\n      _id: String,\n      email: String,\n      name: String,\n      content: String,\n      at: String,\n      isRead: Boolean\n    }\n    type Query{\n        contact (token: String): [Contact]\n        about: About,\n        header: Header,\n        certifications: [Certification],\n        works: [Work],\n        certification(_id: String): Certification\n        login (username: String!, password: String!): String\n        setAboutDesc (description: [String]): About\n        setWorks (works: [String]): [Work]\n        setHeader (name: String, title: String, subtitle: String): Header\n        sendMessage (name: String, email: String, content: String): String\n        isRead (_id: String, token: String): [Contact]\n    }\n";
var resolvers = {
  Query: {
    contact: function () {
      var _contact = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(root, args, context, info) {
        var token, JWT_SECRET, isLogged;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                token = args.token;
                JWT_SECRET = process.env.JWT_SECRET;
                _context2.next = 4;
                return _jsonwebtoken["default"].verify(token, JWT_SECRET,
                /*#__PURE__*/
                function () {
                  var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee(err, decoded) {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            return _context.abrupt("return", !!decoded);

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x5, _x6) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 4:
                isLogged = _context2.sent;

                if (!isLogged) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 8;
                return _contact2["default"].find({});

              case 8:
                _context2.t0 = _context2.sent;
                _context2.next = 12;
                break;

              case 11:
                _context2.t0 = [];

              case 12:
                return _context2.abrupt("return", _context2.t0);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function contact(_x, _x2, _x3, _x4) {
        return _contact.apply(this, arguments);
      }

      return contact;
    }(),
    isRead: function () {
      var _isRead = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(root, args, context, info) {
        var _id, token, JWT_SECRET, isLogged, data;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _id = args._id, token = args.token;
                JWT_SECRET = process.env.JWT_SECRET;
                _context4.next = 4;
                return _jsonwebtoken["default"].verify(token, JWT_SECRET,
                /*#__PURE__*/
                function () {
                  var _ref2 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee3(err, decoded) {
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            return _context3.abrupt("return", !!decoded);

                          case 1:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x11, _x12) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 4:
                isLogged = _context4.sent;

                if (!isLogged) {
                  _context4.next = 12;
                  break;
                }

                _context4.next = 8;
                return _contact2["default"].findOne({
                  _id: _id
                });

              case 8:
                data = _context4.sent;
                data.isRead = true;
                _context4.next = 12;
                return data.save();

              case 12:
                if (!isLogged) {
                  _context4.next = 18;
                  break;
                }

                _context4.next = 15;
                return _contact2["default"].find({});

              case 15:
                _context4.t0 = _context4.sent;
                _context4.next = 19;
                break;

              case 18:
                _context4.t0 = [];

              case 19:
                return _context4.abrupt("return", _context4.t0);

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function isRead(_x7, _x8, _x9, _x10) {
        return _isRead.apply(this, arguments);
      }

      return isRead;
    }(),
    about: function () {
      var _about = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _about2["default"].find({});

              case 2:
                data = _context5.sent;
                return _context5.abrupt("return", data[data.length - 1]);

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function about(_x13, _x14, _x15, _x16) {
        return _about.apply(this, arguments);
      }

      return about;
    }(),
    setAboutDesc: function () {
      var _setAboutDesc = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee6(root, args, context, info) {
        var description, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                description = args.description;
                _context6.next = 3;
                return _about2["default"].findOne({});

              case 3:
                data = _context6.sent;
                data.description = description.map(function (content) {
                  return {
                    content: content
                  };
                });
                _context6.next = 7;
                return data.save()["catch"](function (err) {
                  return console.log("ERROR ", err);
                });

              case 7:
                return _context6.abrupt("return", data);

              case 8:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function setAboutDesc(_x17, _x18, _x19, _x20) {
        return _setAboutDesc.apply(this, arguments);
      }

      return setAboutDesc;
    }(),
    header: function () {
      var _header = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee7(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _header2["default"].find({});

              case 2:
                data = _context7.sent;
                return _context7.abrupt("return", data[data.length - 1]);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function header(_x21, _x22, _x23, _x24) {
        return _header.apply(this, arguments);
      }

      return header;
    }(),
    setHeader: function () {
      var _setHeader = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee8(root, args, context, info) {
        var name, title, subtitle, data;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                name = args.name, title = args.title, subtitle = args.subtitle;
                _context8.next = 3;
                return _header2["default"].findOne({});

              case 3:
                data = _context8.sent;
                data.name = name;
                data.title = title;
                data.subtitle = subtitle;
                _context8.next = 9;
                return data.save()["catch"](function (err) {
                  return console.log("ERROR ", err);
                });

              case 9:
                return _context8.abrupt("return", {
                  name: name,
                  title: title,
                  subtitle: subtitle
                });

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function setHeader(_x25, _x26, _x27, _x28) {
        return _setHeader.apply(this, arguments);
      }

      return setHeader;
    }(),
    certifications: function () {
      var _certifications = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee9(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return _certification["default"].find({});

              case 2:
                data = _context9.sent;
                return _context9.abrupt("return", data);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function certifications(_x29, _x30, _x31, _x32) {
        return _certifications.apply(this, arguments);
      }

      return certifications;
    }(),
    works: function () {
      var _works = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee10(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return _work["default"].find({});

              case 2:
                data = _context10.sent;
                return _context10.abrupt("return", data);

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function works(_x33, _x34, _x35, _x36) {
        return _works.apply(this, arguments);
      }

      return works;
    }(),
    login: function () {
      var _login = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee11(root, args, context, info) {
        var username, user, JWT_SECRET, token;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                username = args.username;
                _context11.next = 3;
                return _user["default"].findOne({
                  username: username
                });

              case 3:
                user = _context11.sent;

                if (!Object.keys(user).length) {
                  _context11.next = 9;
                  break;
                }

                if (!_bcrypt["default"].compareSync(args.password, user.password)) {
                  _context11.next = 9;
                  break;
                }

                JWT_SECRET = process.env.JWT_SECRET;
                token = _jsonwebtoken["default"].sign({
                  username: username
                }, JWT_SECRET);
                return _context11.abrupt("return", token);

              case 9:
                return _context11.abrupt("return", new Error(404));

              case 10:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function login(_x37, _x38, _x39, _x40) {
        return _login.apply(this, arguments);
      }

      return login;
    }(),
    setWorks: function () {
      var _setWorks = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee13(root, args, context, info) {
        var works;
        return regeneratorRuntime.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                works = args.works.map(function (work) {
                  return JSON.parse(work);
                });
                _context13.next = 3;
                return _work["default"].remove({});

              case 3:
                works.forEach(
                /*#__PURE__*/
                function () {
                  var _ref3 = _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee12(work) {
                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                      while (1) {
                        switch (_context12.prev = _context12.next) {
                          case 0:
                            _context12.next = 2;
                            return new _work["default"](work).save();

                          case 2:
                          case "end":
                            return _context12.stop();
                        }
                      }
                    }, _callee12);
                  }));

                  return function (_x45) {
                    return _ref3.apply(this, arguments);
                  };
                }());
                return _context13.abrupt("return", works);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function setWorks(_x41, _x42, _x43, _x44) {
        return _setWorks.apply(this, arguments);
      }

      return setWorks;
    }(),
    sendMessage: function () {
      var _sendMessage = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee14(root, args, context, info) {
        var name, email, content, isSent;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                name = args.name, email = args.email, content = args.content;
                _context14.next = 3;
                return new _contact2["default"]({
                  name: name,
                  email: email,
                  content: content
                }).save();

              case 3:
                _context14.next = 5;
                return (0, _sendMail["default"])({
                  name: name,
                  email: email,
                  content: content
                });

              case 5:
                isSent = _context14.sent;
                return _context14.abrupt("return", "args");

              case 7:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14);
      }));

      function sendMessage(_x46, _x47, _x48, _x49) {
        return _sendMessage.apply(this, arguments);
      }

      return sendMessage;
    }()
  }
};

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});

exports["default"] = _default;