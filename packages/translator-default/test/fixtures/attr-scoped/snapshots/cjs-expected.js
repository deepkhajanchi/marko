"use strict";

exports.__esModule = true;
exports.default = void 0;

var _attr = _interopRequireDefault(require("marko/src/runtime/html/helpers/attr"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/attr-scoped/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  out.w(`<div${(0, _attr.default)("id", _component.elId("1"))}${(0, _attr.default)("aria-described-by", _component.elId("b"))}></div>`);
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);