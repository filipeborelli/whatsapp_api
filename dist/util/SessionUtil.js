'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var APISession = exports.APISession = [];
var sessions = exports.sessions = [];
var QRCodeArr = exports.QRCodeArr = [];
var ClientAttempts = exports.ClientAttempts = [];
var SessionInfos = exports.SessionInfos = [];
var SessionStatus = exports.SessionStatus = [];
var WEBHOOK_URL = exports.WEBHOOK_URL = process.env.WEBHOOK_URL || false;

if (!WEBHOOK_URL) {
    console.warn('Variável ambiente "WEBHOOK_URL" não está definido, webhooks desativado');
}
//# sourceMappingURL=SessionUtil.js.map