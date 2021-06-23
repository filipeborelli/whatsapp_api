'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SessionDelete = exports.SessionUpdate = exports.SessionList = exports.FindSession = exports.NewSession = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var NewSession = exports.NewSession = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var session, _req$body, webhook, clientID, serverToken, clientToken, encKey, macKey, Session, user;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        session = req.query.session;
                        _req$body = req.body, webhook = _req$body.webhook, clientID = _req$body.clientID, serverToken = _req$body.serverToken, clientToken = _req$body.clientToken, encKey = _req$body.encKey, macKey = _req$body.macKey;
                        Session = null;
                        _context.prev = 3;
                        _context.next = 6;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 6:
                        Session = _context.sent;

                        if (!Session) {
                            _context.next = 9;
                            break;
                        }

                        return _context.abrupt('return', res.status(400).json({ status: false, message: 'Session already exists' }));

                    case 9:
                        _context.next = 11;
                        return _sessions.ClientSession.create({ session: session, webhook: webhook, clientID: clientID, serverToken: serverToken, clientToken: clientToken, encKey: encKey, macKey: macKey });

                    case 11:
                        user = _context.sent;
                        return _context.abrupt('return', res.status(200).json(user));

                    case 15:
                        _context.prev = 15;
                        _context.t0 = _context['catch'](3);
                        return _context.abrupt('return', res.status(400).json({ status: false, message: 'Register failed' }));

                    case 18:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 15]]);
    }));

    return function NewSession(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var FindSession = exports.FindSession = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var session, infos;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        session = req.query.session;
                        infos = null;
                        _context2.prev = 2;
                        _context2.next = 5;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 5:
                        infos = _context2.sent;
                        return _context2.abrupt('return', res.status(200).json(infos));

                    case 9:
                        _context2.prev = 9;
                        _context2.t0 = _context2['catch'](2);
                        return _context2.abrupt('return', res.status(400).json({ status: false, message: 'Session not found' }));

                    case 12:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[2, 9]]);
    }));

    return function FindSession(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var SessionList = exports.SessionList = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var list;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        _context3.prev = 0;
                        _context3.next = 3;
                        return _sessions.ClientSession.find();

                    case 3:
                        list = _context3.sent;
                        return _context3.abrupt('return', res.status(200).json(list));

                    case 7:
                        _context3.prev = 7;
                        _context3.t0 = _context3['catch'](0);
                        return _context3.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 10:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[0, 7]]);
    }));

    return function SessionList(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var SessionUpdate = exports.SessionUpdate = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var session, webhook, updateID;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        session = req.query.session;
                        webhook = req.body.webhook;
                        updateID = null;
                        _context4.prev = 3;
                        _context4.next = 6;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 6:
                        updateID = _context4.sent;
                        _context4.next = 9;
                        return _sessions.ClientSession.findByIdAndUpdate(updateID._id, {
                            webhook: webhook
                        });

                    case 9:
                        return _context4.abrupt('return', res.status(200).json({ status: true, message: 'Session update' }));

                    case 12:
                        _context4.prev = 12;
                        _context4.t0 = _context4['catch'](3);
                        return _context4.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 15:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[3, 12]]);
    }));

    return function SessionUpdate(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var SessionDelete = exports.SessionDelete = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var session, delete_id;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        session = req.query.session;
                        _context5.prev = 1;
                        delete_id = null;
                        _context5.next = 5;
                        return _sessions.ClientSession.findOne({ session: session });

                    case 5:
                        delete_id = _context5.sent;
                        _context5.next = 8;
                        return _sessions.ClientSession.findByIdAndRemove(delete_id._id);

                    case 8:
                        return _context5.abrupt('return', res.status(200).json({ status: true, message: 'Session Deleted' }));

                    case 11:
                        _context5.prev = 11;
                        _context5.t0 = _context5['catch'](1);
                        return _context5.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 14:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[1, 11]]);
    }));

    return function SessionDelete(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _sessions = require('../models/sessions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=TokenController.js.map