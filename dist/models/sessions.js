'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClientSession = undefined;

var _database = require('../database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClientSessionSchema = new _database2.default.Schema({
    session: {
        type: String,
        require: true
    },
    webhook: {
        type: String,
        require: true
    },
    clientID: {
        type: String,
        require: true
    },
    serverToken: {
        type: String,
        require: true
    },
    clientToken: {
        type: String,
        require: true
    },
    encKey: {
        type: String,
        require: true
    },
    macKey: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

var ClientSession = exports.ClientSession = _database2.default.model('ClientSession', ClientSessionSchema);
//# sourceMappingURL=sessions.js.map