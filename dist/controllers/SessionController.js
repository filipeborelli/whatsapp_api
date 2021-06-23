'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PhoneInfos = exports.CloseSession = exports.Create = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var Create = exports.Create = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var _this = this;

        var session, webhook, WAC, fullMessage, Client_Session, data, Retorno, _fullMessage2, _SessionInfos;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        session = req.query.session;
                        webhook = req.body.webhook;
                        WAC = new _baileys.WAConnection();

                        _SessionUtil.APISession[session] = WAC;
                        _SessionUtil.SessionStatus[session] = 'STARTING';
                        fullMessage = {
                            type: 'session-update',
                            subtype: 'session status',
                            message: 'Session Starting',
                            session: session,
                            status: 'STARTING'
                        };
                        _context5.next = 8;
                        return (0, _CallWebHook.PostWebHook)(session, fullMessage);

                    case 8:
                        _SessionUtil.APISession[session].browserDescription = [_configs2.default.api_name, _configs2.default.browser_name, _configs2.default.browser_version];
                        _context5.next = 11;
                        return (0, _CheckSession.CheckSession)(session, res);

                    case 11:
                        Client_Session = _context5.sent;

                        if (Client_Session) {
                            data = {
                                clientID: Client_Session.clientID,
                                serverToken: Client_Session.serverToken,
                                clientToken: Client_Session.clientToken,
                                encKey: Client_Session.encKey,
                                macKey: Client_Session.macKey
                            };

                            _SessionUtil.APISession[session].loadAuthInfo(data);
                            res.status(200).json({ status: true, message: 'STARTED' });
                        }
                        _SessionUtil.APISession[session].on('qr', function () {
                            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(qr) {
                                var data, img, qrcodemessages;
                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                _context.next = 2;
                                                return _qrcode2.default.toDataURL(qr);

                                            case 2:
                                                data = _context.sent;

                                                data = data.split(',')[1];
                                                img = Buffer.from(data, 'base64').toString('base64');

                                                _SessionUtil.QRCodeArr[session] = JSON.parse((0, _stringify2.default)({ img: img }));
                                                _SessionUtil.SessionStatus[session] = 'QRCODE';
                                                qrcodemessages = {
                                                    type: 'qrcode',
                                                    subtype: 'session',
                                                    message: 'Recived QR Code',
                                                    session: session,
                                                    base64qrcode: img
                                                };
                                                _context.next = 10;
                                                return (0, _CallWebHook.PostWebHook)(session, qrcodemessages);

                                            case 10:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, _this);
                            }));

                            return function (_x3) {
                                return _ref2.apply(this, arguments);
                            };
                        }());
                        if (!Client_Session) res.status(200).json({ status: true, message: 'QRCODE' });
                        _SessionUtil.APISession[session].on('close', function () {
                            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(close) {
                                var statusmessages;
                                return _regenerator2.default.wrap(function _callee2$(_context2) {
                                    while (1) {
                                        switch (_context2.prev = _context2.next) {
                                            case 0:
                                                if (!(close.reason === 'unknown')) {
                                                    _context2.next = 9;
                                                    break;
                                                }

                                                _SessionUtil.SessionStatus[session] = 'DISCONNECTED';
                                                statusmessages = {
                                                    type: 'session-update',
                                                    subtype: 'session status',
                                                    message: 'Session Disconnected',
                                                    session: session,
                                                    status: 'DISCONNECTED'
                                                };
                                                _context2.next = 5;
                                                return (0, _CallWebHook.PostWebHook)(session, statusmessages);

                                            case 5:
                                                _context2.next = 7;
                                                return (0, _CheckSession.SessionDelete)(restaurant_id, session);

                                            case 7:
                                                _context2.next = 10;
                                                break;

                                            case 9:
                                                return _context2.abrupt('return', false);

                                            case 10:
                                            case 'end':
                                                return _context2.stop();
                                        }
                                    }
                                }, _callee2, _this);
                            }));

                            return function (_x4) {
                                return _ref3.apply(this, arguments);
                            };
                        }());
                        _SessionUtil.APISession[session].on('ws-close', function () {
                            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(closeWS) {
                                var statusmessages;
                                return _regenerator2.default.wrap(function _callee3$(_context3) {
                                    while (1) {
                                        switch (_context3.prev = _context3.next) {
                                            case 0:
                                                if (!(closeWS.reason === 'unknown')) {
                                                    _context3.next = 7;
                                                    break;
                                                }

                                                _SessionUtil.SessionStatus[session] = 'DISCONNECTED';
                                                statusmessages = {
                                                    type: 'session-update',
                                                    subtype: 'session status',
                                                    message: 'Session Disconnected',
                                                    session: session,
                                                    status: 'DISCONNECTED'
                                                };
                                                _context3.next = 5;
                                                return (0, _CallWebHook.PostWebHook)(session, statusmessages);

                                            case 5:
                                                _context3.next = 7;
                                                return (0, _CheckSession.SessionDelete)(restaurant_id, session);

                                            case 7:
                                            case 'end':
                                                return _context3.stop();
                                        }
                                    }
                                }, _callee3, _this);
                            }));

                            return function (_x5) {
                                return _ref4.apply(this, arguments);
                            };
                        }());
                        _SessionUtil.APISession[session].on('chat-update', function () {
                            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(chatUpdate) {
                                var message, messageBody, client_phone, message_id, messageContent, _fullMessage;

                                return _regenerator2.default.wrap(function _callee4$(_context4) {
                                    while (1) {
                                        switch (_context4.prev = _context4.next) {
                                            case 0:
                                                if (!(chatUpdate.messages && chatUpdate.count)) {
                                                    _context4.next = 11;
                                                    break;
                                                }

                                                message = chatUpdate.messages.all()[0];
                                                messageBody = JSON.parse((0, _stringify2.default)(message));
                                                client_phone = messageBody.key.remoteJid.replace('@s.whatsapp.net', '');
                                                message_id = messageBody.key.id;
                                                messageContent = messageBody.message.conversation;
                                                _fullMessage = {
                                                    type: 'chat-update',
                                                    subtype: 'conversation',
                                                    message: 'Recived text message',
                                                    session: session,
                                                    content: messageBody
                                                };
                                                _context4.next = 9;
                                                return (0, _CallWebHook.PostWebHook)(session, _fullMessage);

                                            case 9:
                                                _context4.next = 12;
                                                break;

                                            case 11:
                                                return _context4.abrupt('return', true);

                                            case 12:
                                            case 'end':
                                                return _context4.stop();
                                        }
                                    }
                                }, _callee4, _this);
                            }));

                            return function (_x6) {
                                return _ref5.apply(this, arguments);
                            };
                        }());
                        _context5.prev = 18;
                        _context5.next = 21;
                        return _SessionUtil.APISession[session].connect();

                    case 21:
                        Retorno = _context5.sent;

                        _SessionInfos[session] = _SessionUtil.APISession[session].user;
                        _SessionUtil.SessionStatus[session] = 'CONNECTED';
                        _fullMessage2 = {
                            type: 'session-update',
                            subtype: 'session status',
                            message: 'Session Connected',
                            session: session,
                            status: 'CONNECTED'
                        };
                        _context5.next = 27;
                        return (0, _CallWebHook.PostWebHook)(session, _fullMessage2);

                    case 27:
                        _SessionInfos = JSON.parse((0, _stringify2.default)(_SessionUtil.APISession[session].base64EncodedAuthInfo(), null, 2));
                        _context5.next = 30;
                        return (0, _CheckSession.SaveSession)(session, webhook, _SessionInfos, res);

                    case 30:
                        _context5.next = 35;
                        break;

                    case 32:
                        _context5.prev = 32;
                        _context5.t0 = _context5['catch'](18);
                        return _context5.abrupt('return', res.status(400).json({ status: false, message: 'Session has closed, please try now.' }));

                    case 35:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[18, 32]]);
    }));

    return function Create(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var CloseSession = exports.CloseSession = function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
        var session, fullMessage;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        session = req.query.session;
                        _context6.prev = 1;

                        _SessionUtil.SessionStatus[session] = 'DISCONNECTED';
                        fullMessage = {
                            type: 'session-update',
                            subtype: 'session status',
                            message: 'Session Disconnected',
                            session: session,
                            status: 'DISCONNECTED'
                        };
                        _context6.next = 6;
                        return (0, _CallWebHook.PostWebHook)(session, fullMessage);

                    case 6:
                        _SessionUtil.APISession[session].close();
                        return _context6.abrupt('return', res.status(200).json({ status: false, message: 'Session Closed' }));

                    case 10:
                        _context6.prev = 10;
                        _context6.t0 = _context6['catch'](1);
                        return _context6.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 13:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, this, [[1, 10]]);
    }));

    return function CloseSession(_x7, _x8) {
        return _ref6.apply(this, arguments);
    };
}();

var PhoneInfos = exports.PhoneInfos = function () {
    var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7(req, res) {
        var session;
        return _regenerator2.default.wrap(function _callee7$(_context7) {
            while (1) {
                switch (_context7.prev = _context7.next) {
                    case 0:
                        session = req.query.session;
                        _context7.prev = 1;
                        return _context7.abrupt('return', res.status(200).json({ status: false, infos: _SessionUtil.SessionInfos[session] }));

                    case 5:
                        _context7.prev = 5;
                        _context7.t0 = _context7['catch'](1);
                        return _context7.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 8:
                    case 'end':
                        return _context7.stop();
                }
            }
        }, _callee7, this, [[1, 5]]);
    }));

    return function PhoneInfos(_x9, _x10) {
        return _ref7.apply(this, arguments);
    };
}();

var _baileys = require('@adiwajshing/baileys');

var _SessionUtil = require('../util/SessionUtil');

var _CallWebHook = require('../services/CallWebHook');

var _CheckSession = require('../services/CheckSession');

var _qrcode = require('qrcode');

var _qrcode2 = _interopRequireDefault(_qrcode);

var _configs = require('../configs/configs.json');

var _configs2 = _interopRequireDefault(_configs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=SessionController.js.map