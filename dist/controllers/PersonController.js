'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckNumber = exports.GetPersonStatus = exports.GetProfilePic = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var GetProfilePic = exports.GetProfilePic = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var session, _req$body, phone, isgroup, prefix, ppUrl;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        session = req.query.session;
                        _req$body = req.body, phone = _req$body.phone, isgroup = _req$body.isgroup;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context.prev = 3;
                        _context.next = 6;
                        return _SessionUtil.APISession[session].getProfilePicture(phone + prefix);

                    case 6:
                        ppUrl = _context.sent;
                        return _context.abrupt('return', res.status(200).json({ status: true, result: true, pic: ppUrl }));

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context['catch'](3);
                        return _context.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 13:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 10]]);
    }));

    return function GetProfilePic(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var GetPersonStatus = exports.GetPersonStatus = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var session, _req$body2, phone, isgroup, prefix, status;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        session = req.query.session;
                        _req$body2 = req.body, phone = _req$body2.phone, isgroup = _req$body2.isgroup;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context2.prev = 3;
                        _context2.next = 6;
                        return _SessionUtil.APISession[session].getStatus(phone + prefix);

                    case 6:
                        status = _context2.sent;
                        return _context2.abrupt('return', res.status(200).json((0, _defineProperty3.default)({ status: true, result: true }, 'status', status)));

                    case 10:
                        _context2.prev = 10;
                        _context2.t0 = _context2['catch'](3);
                        return _context2.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 13:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[3, 10]]);
    }));

    return function GetPersonStatus(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var CheckNumber = exports.CheckNumber = function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(req, res) {
        var session, _req$body3, phone, isgroup, prefix, status;

        return _regenerator2.default.wrap(function _callee3$(_context3) {
            while (1) {
                switch (_context3.prev = _context3.next) {
                    case 0:
                        session = req.query.session;
                        _req$body3 = req.body, phone = _req$body3.phone, isgroup = _req$body3.isgroup;
                        prefix = isgroup ? '@g.us' : '@c.us';
                        _context3.prev = 3;
                        _context3.next = 6;
                        return _SessionUtil.APISession[session].isOnWhatsApp(phone + prefix);

                    case 6:
                        status = _context3.sent;
                        return _context3.abrupt('return', res.status(200).json((0, _defineProperty3.default)({ status: true, result: true }, 'status', status)));

                    case 10:
                        _context3.prev = 10;
                        _context3.t0 = _context3['catch'](3);
                        return _context3.abrupt('return', res.status(400).json({ status: false, message: 'Error' }));

                    case 13:
                    case 'end':
                        return _context3.stop();
                }
            }
        }, _callee3, this, [[3, 10]]);
    }));

    return function CheckNumber(_x5, _x6) {
        return _ref3.apply(this, arguments);
    };
}();

var _SessionUtil = require('../util/SessionUtil');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=PersonController.js.map