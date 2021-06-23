"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CheckConnection = undefined;

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

//Iniciar nova sessão
var CheckConnection = exports.CheckConnection = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        var session;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        session = req.query.session;

                        if (!_SessionUtil.SessionStatus[session]) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt("return", res.status(200).json({ result: _SessionUtil.SessionStatus[session] }));

                    case 5:
                        return _context.abrupt("return", res.status(200).json({ result: 'NOT_FOUND' }));

                    case 6:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function CheckConnection(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

var _SessionUtil = require("../util/SessionUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=StatusController.js.map