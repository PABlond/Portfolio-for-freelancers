"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.certifications = exports.setAboutDesc = exports.about = void 0;

var _about = _interopRequireDefault(require("./../../models/about"));

var _certification = _interopRequireDefault(require("./../../models/certification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var about =
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
            return _about["default"].find({});

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

  return function about(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

exports.about = about;

var setAboutDesc =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(root, args, context, info) {
    var description, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            description = args.description;
            _context2.next = 3;
            return _about["default"].findOne({});

          case 3:
            data = _context2.sent;
            data.description = description.map(function (content) {
              return {
                content: content
              };
            });
            _context2.next = 7;
            return data.save()["catch"](function (err) {
              return console.log("ERROR ", err);
            });

          case 7:
            return _context2.abrupt("return", data);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function setAboutDesc(_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}();

exports.setAboutDesc = setAboutDesc;

var certifications =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
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

  return function certifications(_x9, _x10, _x11, _x12) {
    return _ref3.apply(this, arguments);
  };
}();

exports.certifications = certifications;