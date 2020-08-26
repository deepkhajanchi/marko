"use strict";

exports.__esModule = true;
exports.default = void 0;

var _escapeXml = require("marko/src/runtime/html/helpers/escape-xml");

var _test2 = _interopRequireDefault(require("./test.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)(__filename);

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/data-migration/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  (0, _renderTag.default)(_test2.default, {
    "class": input.class,
    "renderBody": (out, data) => {
      out.w("Hello ");
      out.w((0, _escapeXml.x)(data.name));
    }
  }, out, _component, "0");
  out.w("<div>");
  out.w("Hello ");
  out.w((0, _escapeXml.x)(input.name));
  out.w("<span>");

  () => {
    data;
    const data = "foo";
    console.log(data);
  };

  out.w("Hello ");
  out.w((0, _escapeXml.x)(input));
  out.w("</span>");

  if (true) {
    const data = "bar";
    out.w("Hello ");
    out.w("bar");
  }

  out.w("</div>");
}, {
  t: _marko_componentType
}, _marko_component);