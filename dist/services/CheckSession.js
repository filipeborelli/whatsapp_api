'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionDelete = exports.SaveSession = exports.CheckSession = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var CheckSession = exports.CheckSession = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(session, res) {
        var infos;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 3:
                        infos = _context.sent;
                        return _context.abrupt('return', infos);

                    case 7:
                        _context.prev = 7;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', res.status(400).json({ status: false, message: 'Session not found' }));

                    case 10:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 7]]);
    }));

    return function CheckSession(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var SaveSession = exports.SaveSession = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(session, webhook, SessionInfos, res) {
        var Session, user;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        Session = null;
                        _context2.prev = 1;
                        _context2.next = 4;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 4:
                        Session = _context2.sent;

                        if (!Session) {
                            _context2.next = 7;
                            break;
                        }

                        return _context2.abrupt('return', 'Session already exists');

                    case 7:
                        _context2.next = 9;
                        return _sessions.ClientSession.create({
                            session: session,
                            webhook: webhook,
                            clientID: SessionInfos.clientID,
                            serverToken: SessionInfos.serverToken,
                            clientToken: SessionInfos.clientToken,
                            encKey: SessionInfos.encKey,
                            macKey: SessionInfos.macKey
                        });

                    case 9:
                        user = _context2.sent;
                        return _context2.abrupt('return', true);

                    case 13:
                        _context2.prev = 13;
                        _context2.t0 = _context2['catch'](1);
                        return _context2.abrupt('return', res.status(400).json({ status: false, message: 'Register failed' }));

                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[1, 13]]);
    }));

    return function SaveSession(_x3, _x4, _x5, _x6) {
        return _ref2.apply(this, arguments);
    };
}();

var SessionDelete = exports.SessionDelete = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(session) {
        var delete_id;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        delete_id = null;
                        _context3.next = 4;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 4:
                        delete_id = _context3.sent;
                        _context3.next = 7;
                        return _sessions.ClientSession.findByIdAndRemove(delete_id._id);

                    case 7:
                        return _context3.abrupt('return', true);

                    case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', false);

                    case 13:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 10]]);
    }));

    return function SessionDelete(_x7) {
        return _ref3.apply(this, arguments);
    };
}();

var _sessions = require('../models/sessions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=CheckSession.js.map