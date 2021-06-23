'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeleteMessage = exports.UpdatePresence = exports.ReadMessage = exports.GetMessages = exports.GetChats = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var GetChats = exports.GetChats = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var session, chatArray, Chats, allChats, i, count, id, newDate, messagesBody, LastMessage, LengthMessages, MessagePresence, Name, phonePP, PPIMAGE;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        session = req.query.session;
                        chatArray = [];
                        _context.prev = 2;
                        _context.next = 5;
                        return _SessionUtil.APISession[session].loadChats();

                    case 5:
                        Chats = _context.sent;
                        allChats = Chats.chats;
                        i = 0;

                    case 8:
                        if (!(i < allChats.length)) {
                            _context.next = 34;
                            break;
                        }

                        count = 1;
                        id = count + i;
                        newDate = _moment2.default.unix(allChats[i].t).format('DD/MM/YYYY HH:MM:ss');
                        messagesBody = allChats[i].messages;
                        LastMessage = JSON.parse((0, _stringify2.default)(messagesBody));
                        LengthMessages = LastMessage.length - 1;
                        MessagePresence = null;
                        Name = null;
                        phonePP = allChats[i].jid.replace('@s.whatsapp.net', '');

                        if (allChats[i].name) Name = allChats[i].name;else Name = allChats[i].jid.replace('@s.whatsapp.net', '');

                        if (LastMessage[LengthMessages].message) MessagePresence = LastMessage[LengthMessages].message.conversation;else MessagePresence = 'Não foi possível carregar as mensagens anteriores';
                        PPIMAGE = null;
                        _context.prev = 21;
                        _context.next = 24;
                        return _SessionUtil.APISession[session].getProfilePicture(phonePP + '@c.us');

                    case 24:
                        PPIMAGE = _context.sent;
                        _context.next = 30;
                        break;

                    case 27:
                        _context.prev = 27;
                        _context.t0 = _context['catch'](21);

                        PPIMAGE = 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif';

                    case 30:

                        chatArray = [].concat((0, _toConsumableArray3.default)(chatArray), [{ chatId: id, time: newDate, phone: allChats[i].jid.replace('@s.whatsapp.net', ''), title: Name, image: PPIMAGE, lastchat: MessagePresence }]);

                    case 31:
                        i++;
                        _context.next = 8;
                        break;

                    case 34:
                        return _context.abrupt('return', res.status(200).json(chatArray));

                    case 37:
                        _context.prev = 37;
                        _context.t1 = _context['catch'](2);
                        return _context.abrupt('return', res.status(400).json({ message: 'Session closed' }));

                    case 40:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[2, 37], [21, 27]]);
    }));

    return function GetChats(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var GetMessages = exports.GetMessages = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var session, _req$body, phone, isgroup, prefix, Phone_Number, messages;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        session = req.query.session;
                        _req$body = req.body, phone = _req$body.phone, isgroup = _req$body.isgroup;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context2.prev = 3;
                        _context2.next = 6;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 6:
                        Phone_Number = _context2.sent;
                        _context2.next = 9;
                        return _SessionUtil.APISession[session].loadMessages(Phone_Number.jid, 25);

                    case 9:
                        messages = _context2.sent;
                        return _context2.abrupt('return', res.status(200).json(messages));

                    case 13:
                        _context2.prev = 13;
                        _context2.t0 = _context2['catch'](3);
                        return _context2.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 16:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[3, 13]]);
    }));

    return function GetMessages(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var ReadMessage = exports.ReadMessage = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var session, _req$body2, phone, isgroup, unread, prefix, Phone_Number;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        session = req.query.session;
                        _req$body2 = req.body, phone = _req$body2.phone, isgroup = _req$body2.isgroup, unread = _req$body2.unread;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context3.prev = 3;
                        _context3.next = 6;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 6:
                        Phone_Number = _context3.sent;

                        if (unread) {
                            _context3.next = 10;
                            break;
                        }

                        _context3.next = 10;
                        return _SessionUtil.APISession[session].chatRead(Phone_Number.jid);

                    case 10:
                        if (!unread) {
                            _context3.next = 13;
                            break;
                        }

                        _context3.next = 13;
                        return _SessionUtil.APISession[session].chatRead(Phone_Number.jid, 'unread');

                    case 13:
                        return _context3.abrupt('return', res.status(200).json({ status: false, message: 'Ok' }));

                    case 16:
                        _context3.prev = 16;
                        _context3.t0 = _context3['catch'](3);
                        return _context3.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 19:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[3, 16]]);
    }));

    return function ReadMessage(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var UpdatePresence = exports.UpdatePresence = function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        var session, _req$body3, phone, isgroup, presencetype, prefix, presencestatus, Phone_Number;

        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        session = req.query.session;
                        _req$body3 = req.body, phone = _req$body3.phone, isgroup = _req$body3.isgroup, presencetype = _req$body3.presencetype;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        presencestatus = null;

                        if (presencetype === 'available') presencestatus = _baileys.Presence.available;
                        if (presencetype === 'composing') presencestatus = _baileys.Presence.composing;
                        if (presencetype === 'recording') presencestatus = _baileys.Presence.recording;
                        if (presencetype === 'paused') presencestatus = _baileys.Presence.paused;
                        _context4.prev = 8;
                        _context4.next = 11;
                        return _SessionUtil.APISession[session].isOnWhatsApp('' + phone + prefix);

                    case 11:
                        Phone_Number = _context4.sent;
                        _context4.next = 14;
                        return _SessionUtil.APISession[session].updatePresence(Phone_Number.jid, presencestatus);

                    case 14:
                        return _context4.abrupt('return', res.status(200).json({ status: false, message: 'Ok' }));

                    case 17:
                        _context4.prev = 17;
                        _context4.t0 = _context4['catch'](8);
                        return _context4.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 20:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, this, [[8, 17]]);
    }));

    return function UpdatePresence(_x7, _x8) {
        return _ref4.apply(this, arguments);
    };
}();

var DeleteMessage = exports.DeleteMessage = function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var session, _req$body4, phone, isgroup, messageid, isdelete, prefix, timefortyping, Phone_Number, messages, messagescontent, values;

        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        session = req.query.session;
                        _req$body4 = req.body, phone = _req$body4.phone, isgroup = _req$body4.isgroup, messageid = _req$body4.messageid, isdelete = _req$body4.isdelete;
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
                        return sleep(timefortyping);

                    case 16:
                        values = messagescontent.filter(function (messagescontent) {
                            return messagescontent.key.id === messageid;
                        });

                        if (!isdelete) {
                            _context5.next = 20;
                            break;
                        }

                        _context5.next = 20;
                        return _SessionUtil.APISession[session].deleteMessage('' + Phone_Number.jid, { id: messagescontent.key.id, remoteJid: '' + Phone_Number.jid, fromMe: true });

                    case 20:
                        if (isdelete) {
                            _context5.next = 23;
                            break;
                        }

                        _context5.next = 23;
                        return _SessionUtil.APISession[session].clearMessage('' + Phone_Number.jid, { id: messagescontent.key.id, remoteJid: '' + Phone_Number.jid, fromMe: true });

                    case 23:
                        return _context5.abrupt('return', res.status(200).json({ status: true, message: 'Message deleted' }));

                    case 26:
                        _context5.prev = 26;
                        _context5.t0 = _context5['catch'](4);
                        return _context5.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 29:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, this, [[4, 26]]);
    }));

    return function DeleteMessage(_x9, _x10) {
        return _ref5.apply(this, arguments);
    };
}();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _SessionUtil = require('../util/SessionUtil');

var _baileys = require('@adiwajshing/baileys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=ChatController.js.map