'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GetGroupMembers = exports.GetGroups = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var GetGroups = exports.GetGroups = function () {
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
                        if (allChats[i].jid.includes('@g.us')) {
                            chatArray = [].concat((0, _toConsumableArray3.default)(chatArray), [{
                                chatId: id,
                                time: newDate,
                                phone: allChats[i].jid.replace('@s.whatsapp.net', ''),
                                title: Name,
                                image: PPIMAGE,
                                lastchat: MessagePresence
                            }]);
                        }

                    case 31:
                        i++;
                        _context.next = 8;
                        break;

                    case 34:
                        return _context.abrupt('return', res.status(200).json(chatArray));

                    case 37:
                        _context.prev = 37;
                        _context.t1 = _context['catch'](2);

                        console.log(_context.t1);
                        return _context.abrupt('return', res.status(400).json({ message: 'Session closed' }));

                    case 41:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[2, 37], [21, 27]]);
    }));

    return function GetGroups(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var GetGroupMembers = exports.GetGroupMembers = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var session, chats, chatarry, i, participants, x, phone, newvalues;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        session = req.query.session;
                        chats = req.body.chats;
                        chatarry = [];
                        i = 0;

                    case 4:
                        if (!(i < chats.length)) {
                            _context2.next = 13;
                            break;
                        }

                        console.log(chats[i]);
                        _context2.next = 8;
                        return _SessionUtil.APISession[session].groupMetadata(chats[i]);

                    case 8:
                        participants = _context2.sent.participants;

                        for (x = 0; x < participants.length; x++) {
                            phone = participants[x].jid;

                            chatarry = [].concat((0, _toConsumableArray3.default)(chatarry), [{ phone: phone.replace('@s.whatsapp.net', '') }]);
                        }

                    case 10:
                        i++;
                        _context2.next = 4;
                        break;

                    case 13:
                        newvalues = chatarry.filter(function (v, i, a) {
                            return a.findIndex(function (t) {
                                return t.id === v.id;
                            }) === i;
                        });
                        return _context2.abrupt('return', res.status(200).json(newvalues));

                    case 15:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this);
    }));

    return function GetGroupMembers(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _SessionUtil = require('../util/SessionUtil');

var _baileys = require('@adiwajshing/baileys');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=GroupController.js.map