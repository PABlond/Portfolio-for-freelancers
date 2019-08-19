"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = "\ntype ImgAbout {\n  href: String,\n  alt: String\n}\ntype AboutDescription {\n  content: String,\n}\ntype SkillNode {\n  id: String,\n  group: Int\n}\ntype LinksNode {\n  source: String,\n  target: String,\n  value: Int\n}\ntype Skills {\n  title: String,\n  nodes: [SkillNode],\n  links: [LinksNode]\n}\ntype About {\n  img: ImgAbout,\n  certifications: [Certification],\n  skills: [Skills]\n  description: [AboutDescription]\n}\ntype Certification{\n    _id: String,\n    original: String,\n    thumbnail: String\n}";
exports["default"] = _default;