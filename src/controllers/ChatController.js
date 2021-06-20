import moment from 'moment'
import { APISession } from '../util/SessionUtil'
import { Presence } from '@adiwajshing/baileys'

export async function GetChats(req, res) {
    const { session } = req.query
    let chatArray = []
    try {
        const Chats = await APISession[session].loadChats()
        let allChats = Chats.chats
        for (let i = 0; i < allChats.length; i++) {
            let count = 1
            let id = count + i
            let newDate = moment.unix(allChats[i].t).format('DD/MM/YYYY HH:MM:ss')
            let messagesBody = allChats[i].messages
            let LastMessage = JSON.parse(JSON.stringify(messagesBody))
            let LengthMessages = LastMessage.length - 1
            let MessagePresence = null
            let Name = null
            let phonePP = allChats[i].jid.replace('@s.whatsapp.net', '')
            if (allChats[i].name) Name = allChats[i].name
            else Name = allChats[i].jid.replace('@s.whatsapp.net', '')

            if (LastMessage[LengthMessages].message) MessagePresence = LastMessage[LengthMessages].message.conversation
            else MessagePresence = 'Não foi possível carregar as mensagens anteriores'
            let PPIMAGE = null
            try {
                PPIMAGE = await APISession[session].getProfilePicture(`${phonePP}@c.us`)
            } catch (e) {
                PPIMAGE = 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
            }

            chatArray = [...chatArray, { chatId: id, time: newDate, phone: allChats[i].jid.replace('@s.whatsapp.net', ''), title: Name, image: PPIMAGE, lastchat: MessagePresence }]
        }
        return res.status(200).json(chatArray)
    } catch (e) {
        return res.status(400).json({ message: 'Session closed' })
    }
}

export async function GetMessages(req, res) {
    const { session } = req.query
    const { phone, isgroup } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        const messages = await APISession[session].loadMessages(Phone_Number.jid, 25)
        return res.status(200).json(messages)
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function ReadMessage(req, res) {
    const { session } = req.query
    const { phone, isgroup, unread } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        if (!unread) await APISession[session].chatRead(Phone_Number.jid)
        if (unread) await APISession[session].chatRead(Phone_Number.jid, 'unread')
        return res.status(200).json({ status: false, message: 'Ok' })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function UpdatePresence(req, res) {
    const { session } = req.query
    const { phone, isgroup, presencetype } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    let presencestatus = null
    if (presencetype === 'available') presencestatus = Presence.available
    if (presencetype === 'composing') presencestatus = Presence.composing
    if (presencetype === 'recording') presencestatus = Presence.recording
    if (presencetype === 'paused') presencestatus = Presence.paused
    try {
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        await APISession[session].updatePresence(Phone_Number.jid, presencestatus)
        return res.status(200).json({ status: false, message: 'Ok' })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function DeleteMessage(req, res) {
    const { session } = req.query
    const { phone, isgroup, messageid, isdelete } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    let timefortyping = message.length * 50
    try {
        const Phone_Number = await APISession[session].isOnWhatsApp(`${phone}${prefix}`)
        const messages = await APISession[session].loadMessages(Phone_Number.jid)
        let messagescontent = messages.messages
        await APISession[session].updatePresence(Phone_Number.jid, Presence.composing)
        await sleep(timefortyping)
        const values = messagescontent.filter(messagescontent => messagescontent.key.id === messageid)
        if (isdelete) await APISession[session].deleteMessage(`${Phone_Number.jid}`, { id: messagescontent.key.id, remoteJid: `${Phone_Number.jid}`, fromMe: true }) // will delete the sent message for everyone!
        if (!isdelete) await APISession[session].clearMessage(`${Phone_Number.jid}`, { id: messagescontent.key.id, remoteJid: `${Phone_Number.jid}`, fromMe: true }) // will delete the sent message for only you!
        return res.status(200).json({ status: true, message: 'Message deleted' })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}
