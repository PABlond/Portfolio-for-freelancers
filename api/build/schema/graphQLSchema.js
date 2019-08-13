"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _certification = _interopRequireDefault(require("./../models/certification"));

var _graphqlTools = require("graphql-tools");

var _work = _interopRequireDefault(require("./../models/work"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Sample Data
var blogsData = [{
  _id: 1,
  title: "Hello",
  content: "World"
}];
var typeDefs = "\n    type Certification{\n        _id: String,\n        original: String!,\n        thumbnail: String!\n    }\n    type Work{\n        _id: String,\n        title: String!,\n        image: String!,\n        content: String!,\n        technos: String!\n    }\n    type Query{\n        certifications: [Certification],\n        works: [Work],\n        certification(_id: Int): Certification\n    }\n";
var resolvers = {
  Query: {
    certifications: function () {
      var _certifications = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _certification["default"].find({});

              case 2:
                data = _context.sent;
                return _context.abrupt("return", data);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function certifications(_x, _x2, _x3, _x4) {
        return _certifications.apply(this, arguments);
      }

      return certifications;
    }(),
    works: function () {
      var _works = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(root, args, context, info) {
        var data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _work["default"].find({});

              case 2:
                data = _context2.sent;
                return _context2.abrupt("return", data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function works(_x5, _x6, _x7, _x8) {
        return _works.apply(this, arguments);
      }

      return works;
    }()
  }
};

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: typeDefs,
  resolvers: resolvers
});

exports["default"] = _default;