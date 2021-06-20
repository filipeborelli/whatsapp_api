import sleep from 'await-sleep'
import { Presence, MessageType, MessageOptions } from '@adiwajshing/baileys'
import { APISession } from '../util/SessionUtil'
export async function SendText(req, res) {
    const { session } = req.query
    const { phone, message, isgroup } = req.body
    let timefortyping = message.length * 50
    let reply = null
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        await APISession[session].updatePresence(Phone_Number.jid, Presence.composing)
        await sleep(timefortyping)
        await APISession[session].sendMessage(`${Phone_Number.jid}`, message, MessageType.text)
        return res.status(200).json({ status: true, result: true, message: 'Sended' })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function SendFile(req, res) {
    const { session } = req.query
    const { phone, message, base64file, isgroup } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const buf = Buffer.from(base64file, 'base64')
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        await APISession[session].updatePresence(Phone_Number.jid, Presence.composing)
        await sleep(1000)
        await APISession[session].sendMessage(`${Phone_Number.jid}`, buf, MessageType.document, { mimetype: 'application/pdf', caption: message })
        return res.status(200).json({ status: true, result: true, message: 'Sended' })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function SendImage(req, res) {
    const { session } = req.query
    const { phone, message, base64image, isgroup } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const buf = Buffer.from(base64image, 'base64')
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        await APISession[session].updatePresence(Phone_Number.jid, Presence.composing)
        await sleep(1000)
        await APISession[session].sendMessage(`${Phone_Number.jid}`, buf, MessageType.image, { mimetype: 'image/png', caption: message })
        return res.status(200).json({ status: true, result: true, message: 'Sended' })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function SendAudio(req, res) {
    const { session } = req.query
    const { phone, message, base64audio, isgroup } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const buf = Buffer.from(base64audio, 'base64')
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        await APISession[session].updatePresence(Phone_Number.jid, Presence.recording)
        await sleep(1000)
        await APISession[session].sendMessage(`${Phone_Number.jid}`, buf, MessageType.audio, { mimetype: 'audio/ogg; codecs=opus', ptt: true, caption: message })
        return res.status(200).json({ status: true, result: true, message: 'Sended' })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function Quoted(req, res) {
    const { session } = req.query
    const { phone, message, isgroup, replyid } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    let timefortyping = message.length * 50
    try {
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        const messages = await APISession[session].loadMessages(Phone_Number.jid)
        let messagescontent = messages.messages
        await APISession[session].updatePresence(Phone_Number.jid, Presence.composing)
        await sleep(timefortyping)
        const values = messagescontent.filter(messagescontent => messagescontent.key.id === replyid)
        await APISession[session].sendMessage(`${Phone_Number.jid}`, message, MessageType.text, { quoted: values[0] })
        return res.status(200).json(values)
    } catch (e) {
        console.log(e)
        return res.status(400).json({ status: false, message: 'Error' })
    }
}
