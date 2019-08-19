"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHeader = exports.header = void 0;

var _header = _interopRequireDefault(require("./../../models/header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var header =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(root, args, context, info) {
    var data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _header["default"].find({});

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

  return function header(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.header = header;

var setHeader =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(root, args, context, info) {
    var name, title, subtitle, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = args.name, title = args.title, subtitle = args.subtitle;
            _context2.next = 3;
            return _header["default"].findOne({});

          case 3:
            data = _context2.sent;
            data.name = name;
            data.title = title;
            data.subtitle = subtitle;
            _context2.next = 9;
            return data.save()["catch"](function (err) {
              return console.log("ERROR ", err);
            });

          case 9:
            return _context2.abrupt("return", {
              name: name,
              title: title,
              subtitle: subtitle
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setHeader(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

exports.setHeader = setHeader;