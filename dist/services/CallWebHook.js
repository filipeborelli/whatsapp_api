'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostWebHook = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var PostWebHook = exports.PostWebHook = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(session, data) {
        var webhookurl;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 3:
                        webhookurl = _context.sent;

                        if (!webhookurl.webhook) {
                            _context.next = 7;
                            break;
                        }

                        _context.next = 7;
                        return _axios2.default.post(webhookurl.webhook, (0, _assign2.default)({ event: 'Message', session: session }, data));

                    case 7:
                        _context.next = 12;
                        break;

                    case 9:
                        _context.prev = 9;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', false);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 9]]);
    }));

    return function PostWebHook(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _sessions = require('../models/sessions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=CallWebHook.js.map