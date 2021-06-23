'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckToken = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var CheckToken = exports.CheckToken = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var token, api_key;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        token = req.headers['x-acess-token'];

                        console.log(token);
                        api_key = req.headers.api_key;

                        _jsonwebtoken2.default.verify(token, api_key, function (err, decoded) {
                            if (err) return res.status(401).json({ status: false, message: 'Authentication Failed' }).end();
                            next();
                        });

                    case 4:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function CheckToken(_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=jwtcheck.js.map