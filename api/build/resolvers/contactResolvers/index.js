"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendMessage = exports.isRead = exports.contact = void 0;

var _contact = _interopRequireDefault(require("./../../models/contact"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _sendMail = _interopRequireDefault(require("./../../utils/sendMail"));

var _checkToken = _interopRequireDefault(require("./../../utils/checkToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var contact =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(root, args, context, info) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _checkToken["default"])(args.token);

          case 2:
            if (!_context.sent) {
              _context.next = 8;
              break;
            }

            _context.next = 5;
            return _contact["default"].find({});

          case 5:
            _context.t0 = _context.sent;
            _context.next = 9;
            break;

          case 8:
            _context.t0 = [];

          case 9:
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function contact(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.contact = contact;

var isRead =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(root, args, context, info) {
    var _id, token, isLogged, data;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _id = args._id, token = args.token;
            _context2.next = 3;
            return (0, _checkToken["default"])(token);

          case 3:
            isLogged = _context2.sent;

            if (!isLogged) {
              _context2.next = 11;
              break;
            }

            _context2.next = 7;
            return _contact["default"].findOne({
              _id: _id
            });

          case 7:
            data = _context2.sent;
            data.isRead = true;
            _context2.next = 11;
            return data.save();

          case 11:
            if (!isLogged) {
              _context2.next = 17;
              break;
            }

            _context2.next = 14;
            return _contact["default"].find({});

          case 14:
            _context2.t0 = _context2.sent;
            _context2.next = 18;
            break;

          case 17:
            _context2.t0 = [];

          case 18:
            return _context2.abrupt("return", _context2.t0);

          case 19:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function isRead(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

exports.isRead = isRead;

var sendMessage =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(root, args, context, info) {
    var name, email, content, isSent;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            name = args.name, email = args.email, content = args.content;
            _context3.next = 3;
            return new _contact["default"]({
              name: name,
              email: email,
              content: content
            }).save();

          case 3:
            _context3.next = 5;
            return (0, _sendMail["default"])({
              name: name,
              email: email,
              content: content
            });

          case 5:
            isSent = _context3.sent;
            return _context3.abrupt("return", "args");

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function sendMessage(_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

exports.sendMessage = sendMessage;