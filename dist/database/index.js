'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect('mongodb://localhost/apiwhatsappt', { useNewUrlParser: true, useUnifiedTopology: true });
_mongoose2.default.Promise = global.Promise;
module.exports = _mongoose2.default;
//# sourceMappingURL=index.js.map