"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _graphqlTools = require("graphql-tools");

var _typeDefs = _interopRequireDefault(require("./typeDefs"));

var _resolvers = require("./resolvers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var contact = _resolvers.contactResolvers.contact,
    isRead = _resolvers.contactResolvers.isRead,
    sendMessage = _resolvers.contactResolvers.sendMessage;
var about = _resolvers.aboutResolvers.about,
    setAboutDesc = _resolvers.aboutResolvers.setAboutDesc,
    certifications = _resolvers.aboutResolvers.certifications;
var header = _resolvers.headerResolver.header,
    setHeader = _resolvers.headerResolver.setHeader;
var works = _resolvers.worksResolvers.works,
    setWorks = _resolvers.worksResolvers.setWorks;
var login = _resolvers.authResolvers.login;
var resolvers = {
  Query: {
    contact: contact,
    isRead: isRead,
    sendMessage: sendMessage,
    about: about,
    setAboutDesc: setAboutDesc,
    header: header,
    setHeader: setHeader,
    certifications: certifications,
    works: works,
    setWorks: setWorks,
    login: login
  }
};

var _default = (0, _graphqlTools.makeExecutableSchema)({
  typeDefs: _typeDefs["default"],
  resolvers: resolvers
});

exports["default"] = _default;