'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SignToken = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var SignToken = exports.SignToken = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var api_key, token;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        api_key = req.headers.api_key;

                        if (!(api_key === process.env.SECRET_KEY)) {
                            _context.next = 6;
                            break;
                        }

                        token = _jsonwebtoken2.default.sign({ user: 'WhatsApp' }, process.env.SECRET_KEY, { expiresIn: _configs2.default.token_valid });
                        return _context.abrupt('return', res.status(200).json({ status: true, token: token }));

                    case 6:
                        return _context.abrupt('return', res.status(401).json({ status: false, message: 'Check API KEY' }));

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function SignToken(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _configs = require('../configs/configs.json');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=JWTController.js.map