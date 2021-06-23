import { WAConnection } from '@adiwajshing/baileys'
import { QRCodeArr, APISession, SessionStatus, SessionInfos } from '../util/SessionUtil'
import { PostWebHook } from '../services/CallWebHook'
import { CheckSession, SaveSession, SessionDelete } from '../services/CheckSession'
import QRCode from 'qrcode'
import configs from '../configs/configs.json'
export async function Create(req, res) {
    const { session } = req.query
    const { webhook } = req.body
    const WAC = new WAConnection()
    APISession[session] = WAC
    SessionStatus[session] = 'STARTING'
    let fullMessage = {
        type: 'session-update',
        subtype: 'session status',
        message: 'Session Starting',
        session: session,
        status: 'STARTING',
    }
    await PostWebHook(session, fullMessage)
    APISession[session].browserDescription = [configs.api_name, configs.browser_name, configs.browser_version]
    let Client_Session = await CheckSession(session, res)
    if (Client_Session) {
        let data = {
            clientID: Client_Session.clientID,
            serverToken: Client_Session.serverToken,
            clientToken: Client_Session.clientToken,
            encKey: Client_Session.encKey,
            macKey: Client_Session.macKey,
        }
        APISession[session].loadAuthInfo(data)
        res.status(200).json({ status: true, message: 'STARTED' })
    }
    APISession[session].on('qr', async qr => {
        let data = await QRCode.toDataURL(qr)
        data = data.split(',')[1]
        let img = Buffer.from(data, 'base64').toString('base64')
        QRCodeArr[session] = JSON.parse(JSON.stringify({ img }))
        SessionStatus[session] = 'QRCODE'
        let qrcodemessages = {
            type: 'qrcode',
            subtype: 'session',
            message: 'Recived QR Code',
            session: session,
            base64qrcode: img,
        }
        await PostWebHook(session, qrcodemessages)
    })
    if (!Client_Session) res.status(200).json({ status: true, message: 'QRCODE' })
    APISession[session].on('close', async close => {
        if (close.reason === 'unknown') {
            SessionStatus[session] = 'DISCONNECTED'
            let statusmessages = {
                type: 'session-update',
                subtype: 'session status',
                message: 'Session Disconnected',
                session: session,
                status: 'DISCONNECTED',
            }
            await PostWebHook(session, statusmessages)
            await SessionDelete(restaurant_id, session)
        } else return false
    })
    APISession[session].on('ws-close', async closeWS => {
        if (closeWS.reason === 'unknown') {
            SessionStatus[session] = 'DISCONNECTED'
            let statusmessages = {
                type: 'session-update',
                subtype: 'session status',
                message: 'Session Disconnected',
                session: session,
                status: 'DISCONNECTED',
            }
            await PostWebHook(session, statusmessages)
            await SessionDelete(restaurant_id, session)
        }
    })
    APISession[session].on('chat-update', async chatUpdate => {
        if (chatUpdate.messages && chatUpdate.count) {
            const message = chatUpdate.messages.all()[0]
            let messageBody = JSON.parse(JSON.stringify(message))
            let client_phone = messageBody.key.remoteJid.replace('@s.whatsapp.net', '')
            let message_id = messageBody.key.id
            let messageContent = messageBody.message.conversation
            let fullMessage = {
                type: 'chat-update',
                subtype: 'conversation',
                message: 'Recived text message',
                session: session,
                content: messageBody,
            }
            await PostWebHook(session, fullMessage)
        } else return true
    })
    try {
        const Retorno = await APISession[session].connect()
        console.log(APISession[session])
        SessionInfos[session] = APISession[session].user
        SessionStatus[session] = 'CONNECTED'
        let fullMessage = {
            type: 'session-update',
            subtype: 'session status',
            message: 'Session Connected',
            session: session,
            status: 'CONNECTED',
        }
        await PostWebHook(session, fullMessage)
        let SessionInfos = JSON.parse(JSON.stringify(APISession[session].base64EncodedAuthInfo(), null, 2))
        await SaveSession(session, webhook, SessionInfos, res)
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Session has closed, please try now.' })
    }
}
export async function CloseSession(req, res) {
    const { session } = req.query
    try {
        SessionStatus[session] = 'DISCONNECTED'
        let fullMessage = {
            type: 'session-update',
            subtype: 'session status',
            message: 'Session Disconnected',
            session: session,
            status: 'DISCONNECTED',
        }
        await PostWebHook(session, fullMessage)
        APISession[session].close()
        return res.status(200).json({ status: false, message: 'Session Closed' })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function PhoneInfos(req, res) {
    const { session } = req.query
    try {
        return res.status(200).json({ status: false, infos: SessionInfos[session] })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}
