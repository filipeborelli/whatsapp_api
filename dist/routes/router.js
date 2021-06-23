'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = undefined;

var _express = require('express');

var _JWTController = require('../controllers/JWTController');

var _jwtcheck = require('../middlewares/jwtcheck');

var _SessionController = require('../controllers/SessionController');

var _QrCodeController = require('../controllers/QrCodeController');

var _StatusController = require('../controllers/StatusController');

var _PersonController = require('../controllers/PersonController');

var _MessageController = require('../controllers/MessageController');

var _ChatController = require('../controllers/ChatController');

var _GroupController = require('../controllers/GroupController');

var _TokenController = require('../controllers/TokenController');

var router = exports.router = new _express.Router();

// ## ---------------------------- JWT --------------------------
router.post('/api/newtoken/', _JWTController.SignToken);

// ## ------------------------ Session -------------------------
router.post('/api/start/', _jwtcheck.CheckToken, _SessionController.Create);
router.post('/api/close/', _jwtcheck.CheckToken, _SessionController.CloseSession);
router.get('/api/qrcode/', _jwtcheck.CheckToken, _QrCodeController.GetQrCode);
router.get('/api/checkstatus/', _jwtcheck.CheckToken, _StatusController.CheckConnection);

// ## -------------------------Chat-------------------------
router.post('/api/getchats/', _jwtcheck.CheckToken, _ChatController.GetChats);
router.post('/api/getgroups/', _jwtcheck.CheckToken, _GroupController.GetGroups);
router.post('/api/getparticipants/', _jwtcheck.CheckToken, _GroupController.GetGroupMembers);
router.post('/api/getmessages/', _jwtcheck.CheckToken, _ChatController.GetMessages);
router.post('/api/readmessage/', _jwtcheck.CheckToken, _ChatController.ReadMessage);
router.post('/api/deletemessage/', _jwtcheck.CheckToken, _ChatController.DeleteMessage);
router.post('/api/updatepresence/', _jwtcheck.CheckToken, _ChatController.UpdatePresence);

// ## -------------------------Message-------------------------
router.post('/api/sendmessage/', _jwtcheck.CheckToken, _MessageController.SendText);
router.post('/api/sendfile/', _jwtcheck.CheckToken, _MessageController.SendFile);
router.post('/api/quoted/', _jwtcheck.CheckToken, _MessageController.Quoted);
router.post('/api/sendimage/', _jwtcheck.CheckToken, _MessageController.SendImage);
router.post('/api/sendaudio/', _jwtcheck.CheckToken, _MessageController.SendAudio);

// ## -------------------------Phone-------------------------
router.get('/api/phoneinfos/', _jwtcheck.CheckToken, _SessionController.PhoneInfos);

// ## -------------------------Person-------------------------
router.post('/api/getprofilepic/', _jwtcheck.CheckToken, _PersonController.GetProfilePic);
router.post('/api/getpersonstatus/', _jwtcheck.CheckToken, _PersonController.GetPersonStatus);
router.post('/api/checknumber/', _jwtcheck.CheckToken, _PersonController.CheckNumber);

// ## -------------------------Session Tokens-------------------------
router.post('/api/newsession/', _jwtcheck.CheckToken, _TokenController.NewSession);
router.get('/api/sessionlist/', _jwtcheck.CheckToken, _TokenController.SessionList);
router.put('/api/sessionupdate', _jwtcheck.CheckToken, _TokenController.SessionUpdate);
router.post('/api/findsession/', _jwtcheck.CheckToken, _TokenController.FindSession);
router.delete('/api/deletesession/', _jwtcheck.CheckToken, _TokenController.SessionDelete);
//# sourceMappingURL=router.js.map