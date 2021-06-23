'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Quoted = exports.SendAudio = exports.SendImage = exports.SendFile = exports.SendText = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var SendText = exports.SendText = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var session, _req$body, phone, message, isgroup, timefortyping, reply, prefix, Phone_Number;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        session = req.query.session;
                        _req$body = req.body, phone = _req$body.phone, message = _req$body.message, isgroup = _req$body.isgroup;
                        timefortyping = message.length * 50;
                        reply = null;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context.prev = 5;
                        _context.next = 8;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 8:
                        Phone_Number = _context.sent;
                        _context.next = 11;
                        return _SessionUtil.APISession[session].updatePresence(Phone_Number.jid, _baileys.Presence.composing);

                    case 11:
                        _context.next = 13;
                        return (0, _awaitSleep2.default)(timefortyping);

                    case 13:
                        _context.next = 15;
                        return _SessionUtil.APISession[session].sendMessage('' + Phone_Number.jid, message, _baileys.MessageType.text);

                    case 15:
                        return _context.abrupt('return', res.status(200).json({ status: true, result: true, message: 'Sended' }));

                    case 18:
                        _context.prev = 18;
                        _context.t0 = _context['catch'](5);
                        return _context.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 21:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[5, 18]]);
    }));

    return function SendText(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var SendFile = exports.SendFile = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var session, _req$body2, phone, message, base64file, isgroup, prefix, buf, Phone_Number;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        session = req.query.session;
                        _req$body2 = req.body, phone = _req$body2.phone, message = _req$body2.message, base64file = _req$body2.base64file, isgroup = _req$body2.isgroup;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context2.prev = 3;
                        buf = Buffer.from(base64file, 'base64');
                        _context2.next = 7;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 7:
                        Phone_Number = _context2.sent;
                        _context2.next = 10;
                        return _SessionUtil.APISession[session].updatePresence(Phone_Number.jid, _baileys.Presence.composing);

                    case 10:
                        _context2.next = 12;
                        return (0, _awaitSleep2.default)(1000);

                    case 12:
                        _context2.next = 14;
                        return _SessionUtil.APISession[session].sendMessage('' + Phone_Number.jid, buf, _baileys.MessageType.document, { mimetype: 'application/pdf', caption: message });

                    case 14:
                        return _context2.abrupt('return', res.status(200).json({ status: true, result: true, message: 'Sended' }));

                    case 17:
                        _context2.prev = 17;
                        _context2.t0 = _context2['catch'](3);

                        console.log(_context2.t0);
                        return _context2.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 21:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[3, 17]]);
    }));

    return function SendFile(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var SendImage = exports.SendImage = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var session, _req$body3, phone, message, base64image, isgroup, prefix, buf, Phone_Number;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        session = req.query.session;
                        _req$body3 = req.body, phone = _req$body3.phone, message = _req$body3.message, base64image = _req$body3.base64image, isgroup = _req$body3.isgroup;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context3.prev = 3;
                        buf = Buffer.from(base64image, 'base64');
                        _context3.next = 7;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 7:
                        Phone_Number = _context3.sent;
                        _context3.next = 10;
                        return _SessionUtil.APISession[session].updatePresence(Phone_Number.jid, _baileys.Presence.composing);

                    case 10:
                        _context3.next = 12;
                        return (0, _awaitSleep2.default)(1000);

                    case 12:
                        _context3.next = 14;
                        return _SessionUtil.APISession[session].sendMessage('' + Phone_Number.jid, buf, _baileys.MessageType.image, { mimetype: 'image/png', caption: message });

                    case 14:
                        return _context3.abrupt('return', res.status(200).json({ status: true, result: true, message: 'Sended' }));

                    case 17:
                        _context3.prev = 17;
                        _context3.t0 = _context3['catch'](3);
                        return _context3.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 20:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[3, 17]]);
    }));

    return function SendImage(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var SendAudio = exports.SendAudio = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var session, _req$body4, phone, message, base64audio, isgroup, prefix, buf, Phone_Number;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        session = req.query.session;
                        _req$body4 = req.body, phone = _req$body4.phone, message = _req$body4.message, base64audio = _req$body4.base64audio, isgroup = _req$body4.isgroup;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context4.prev = 3;
                        buf = Buffer.from(base64audio, 'base64');
                        _context4.next = 7;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 7:
                        Phone_Number = _context4.sent;
                        _context4.next = 10;
                        return _SessionUtil.APISession[session].updatePresence(Phone_Number.jid, _baileys.Presence.recording);

                    case 10:
                        _context4.next = 12;
                        return (0, _awaitSleep2.default)(1000);

                    case 12:
                        _context4.next = 14;
                        return _SessionUtil.APISession[session].sendMessage('' + Phone_Number.jid, buf, _baileys.MessageType.audio, { mimetype: 'audio/ogg; codecs=opus', ptt: true, caption: message });

                    case 14:
                        return _context4.abrupt('return', res.status(200).json({ status: true, result: true, message: 'Sended' }));

                    case 17:
                        _context4.prev = 17;
                        _context4.t0 = _context4['catch'](3);
                        return _context4.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 20:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[3, 17]]);
    }));

    return function SendAudio(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var Quoted = exports.Quoted = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var session, _req$body5, phone, message, isgroup, replyid, prefix, timefortyping, Phone_Number, messages, messagescontent, values;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        session = req.query.session;
                        _req$body5 = req.body, phone = _req$body5.phone, message = _req$body5.message, isgroup = _req$body5.isgroup, replyid = _req$body5.replyid;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        timefortyping = message.length * 50;
                        _context5.prev = 4;
                        _context5.next = 7;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 7:
                        Phone_Number = _context5.sent;
                        _context5.next = 10;
                        return _SessionUtil.APISession[session].loadMessages(Phone_Number.jid);

                    case 10:
                        messages = _context5.sent;
                        messagescontent = messages.messages;
                        _context5.next = 14;
                        return _SessionUtil.APISession[session].updatePresence(Phone_Number.jid, _baileys.Presence.composing);

                    case 14:
                        _context5.next = 16;
                        return (0, _awaitSleep2.default)(timefortyping);

                    case 16:
                        values = messagescontent.filter(function (messagescontent) {
                            return messagescontent.key.id === replyid;
                        });
                        _context5.next = 19;
                        return _SessionUtil.APISession[session].sendMessage('' + Phone_Number.jid, message, _baileys.MessageType.text, { quoted: values[0] });

                    case 19:
                        return _context5.abrupt('return', res.status(200).json(values));

                    case 22:
                        _context5.prev = 22;
                        _context5.t0 = _context5['catch'](4);

                        console.log(_context5.t0);
                        return _context5.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 26:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[4, 22]]);
    }));

    return function Quoted(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _awaitSleep = require('await-sleep');

var _awaitSleep2 = _interopRequireDefault(_awaitSleep);

var _baileys = require('@adiwajshing/baileys');

var _SessionUtil = require('../util/SessionUtil');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=MessageController.js.map