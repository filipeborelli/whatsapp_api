'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

require('dotenv/config');

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _router = require('./routes/router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = (0, _express2.default)();
app.use((0, _cors2.default)({ origin: '*' }));
app.use((0, _helmet2.default)());
app.use((0, _morgan2.default)("dev"));
app.use(_express2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json({ limit: '40mb' }));
app.use(_router.router);
//# sourceMappingURL=app.js.map