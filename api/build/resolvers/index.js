"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authResolvers = exports.worksResolvers = exports.headerResolver = exports.aboutResolvers = exports.contactResolvers = void 0;

var _contactResolvers = require("./contactResolvers");

var _aboutResolvers = require("./aboutResolvers");

var _headerResolvers = require("./headerResolvers");

var _worksResolvers = require("./worksResolvers");

var _authResolvers = require("./authResolvers");

var contactResolvers = {
  contact: _contactResolvers.contact,
  isRead: _contactResolvers.isRead,
  sendMessage: _contactResolvers.sendMessage
};
exports.contactResolvers = contactResolvers;
var aboutResolvers = {
  about: _aboutResolvers.about,
  setAboutDesc: _aboutResolvers.setAboutDesc,
  certifications: _aboutResolvers.certifications
};
exports.aboutResolvers = aboutResolvers;
var headerResolver = {
  header: _headerResolvers.header,
  setHeader: _headerResolvers.setHeader
};
exports.headerResolver = headerResolver;
var worksResolvers = {
  works: _worksResolvers.works,
  setWorks: _worksResolvers.setWorks
};
exports.worksResolvers = worksResolvers;
var authResolvers = {
  login: _authResolvers.login
};
exports.authResolvers = authResolvers;