"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = void 0;

var _user = _interopRequireDefault(require("./../../models/user"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var login =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(root, args, context, info) {
    var username, user, JWT_SECRET, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            username = args.username;
            _context.next = 3;
            return _user["default"].findOne({
              username: username
            });

          case 3:
            user = _context.sent;

            if (!Object.keys(user).length) {
              _context.next = 9;
              break;
            }

            if (!_bcrypt["default"].compareSync(args.password, user.password)) {
              _context.next = 9;
              break;
            }

            JWT_SECRET = process.env.JWT_SECRET;
            token = _jsonwebtoken["default"].sign({
              username: username
            }, JWT_SECRET);
            return _context.abrupt("return", token);

          case 9:
            return _context.abrupt("return", new Error(404));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function login(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.login = login;