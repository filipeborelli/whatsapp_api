import moment from 'moment'
import { APISession } from '../util/SessionUtil'
import { WAGroupParticipant } from '@adiwajshing/baileys'
export async function GetGroups(req, res) {
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
            if (allChats[i].jid.includes('@g.us')) {
                chatArray = [
                    ...chatArray,
                    {
                        chatId: id,
                        time: newDate,
                        phone: allChats[i].jid.replace('@s.whatsapp.net', ''),
                        title: Name,
                        image: PPIMAGE,
                        lastchat: MessagePresence,
                    },
                ]
            }
        }
        return res.status(200).json(chatArray)
    } catch (e) {
        console.log(e)
        return res.status(400).json({ message: 'Session closed' })
    }
}
export async function GetGroupMembers(req, res) {
    const { session } = req.query
    const { chats } = req.body
    let chatarry = []
    for (let i = 0; i < chats.length; i++) {
        console.log(chats[i])
        let participants = (await APISession[session].groupMetadata(chats[i])).participants
        for (let x = 0; x < participants.length; x++) {
            let phone = participants[x].jid
            chatarry = [...chatarry, { phone: phone.replace('@s.whatsapp.net', '') }]
        }
    }
    let newvalues = chatarry.filter((v, i, a) => a.findIndex(t => t.id === v.id) === i)
    return res.status(200).json(newvalues)
}
