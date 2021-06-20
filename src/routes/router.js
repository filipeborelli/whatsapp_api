import { Router } from 'express'
import { SignToken } from '../controllers/JWTController'
import { CheckToken } from '../middlewares/jwtcheck'
import { Create, CloseSession, PhoneInfos } from '../controllers/SessionController'
import { GetQrCode } from '../controllers/QrCodeController'
import { CheckConnection } from '../controllers/StatusController'
import { GetProfilePic, CheckNumber, GetPersonStatus } from '../controllers/PersonController'
import { SendText, SendFile, SendAudio, SendImage, Quoted } from '../controllers/MessageController'
import { GetChats, GetMessages, DeleteMessage, ReadMessage, UpdatePresence } from '../controllers/ChatController'
import { GetGroups, GetGroupMembers } from '../controllers/GroupController'
import { NewSession, SessionDelete, SessionUpdate, SessionList, FindSession } from '../controllers/TokenController'
export const router = new Router()

// ## ---------------------------- JWT --------------------------
router.post('/api/newtoken/', SignToken)

// ## ------------------------ Session -------------------------
router.post('/api/start/', CheckToken, Create)
router.post('/api/close/', CheckToken, CloseSession)
router.get('/api/qrcode/', CheckToken, GetQrCode)
router.get('/api/checkstatus/', CheckToken, CheckConnection)

// ## -------------------------Chat-------------------------
router.post('/api/getchats/', CheckToken, GetChats)
router.post('/api/getgroups/', CheckToken, GetGroups)
router.post('/api/getparticipants/', CheckToken, GetGroupMembers)
router.post('/api/getmessages/', CheckToken, GetMessages)
router.post('/api/readmessage/', CheckToken, ReadMessage)
router.post('/api/deletemessage/', CheckToken, DeleteMessage)
router.post('/api/updatepresence/', CheckToken, UpdatePresence)

// ## -------------------------Message-------------------------
router.post('/api/sendmessage/', CheckToken, SendText)
router.post('/api/sendfile/', CheckToken, SendFile)
router.post('/api/quoted/', CheckToken, Quoted)
router.post('/api/sendimage/', CheckToken, SendImage)
router.post('/api/sendaudio/', CheckToken, SendAudio)

// ## -------------------------Phone-------------------------
router.get('/api/phoneinfos/', CheckToken, PhoneInfos)

// ## -------------------------Person-------------------------
router.post('/api/getprofilepic/', CheckToken, GetProfilePic)
router.post('/api/getpersonstatus/', CheckToken, GetPersonStatus)
router.post('/api/checknumber/', CheckToken, CheckNumber)

// ## -------------------------Session Tokens-------------------------
router.post('/api/newsession/', CheckToken, NewSession)
router.get('/api/sessionlist/', CheckToken, SessionList)
router.put('/api/sessionupdate', CheckToken, SessionUpdate)
router.post('/api/findsession/', CheckToken, FindSession)
router.delete('/api/deletesession/', CheckToken, SessionDelete)
