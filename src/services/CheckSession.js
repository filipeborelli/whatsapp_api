import { ClientSession } from '../models/sessions'
export async function CheckSession(session, res) {
    try {
        let infos = await ClientSession.findOne({ session })
        return infos
    } catch (err) {
        return res.status(400).json({ status: false, message: 'Session not found' })
    }
}
export async function SaveSession(session, webhook, SessionInfos, res) {
    let Session = null
    try {
        Session = await ClientSession.findOne({ session })
        if (Session) return 'Session already exists'
        const user = await ClientSession.create({
            session: session,
            webhook: webhook,
            clientID: SessionInfos.clientID,
            serverToken: SessionInfos.serverToken,
            clientToken: SessionInfos.clientToken,
            encKey: SessionInfos.encKey,
            macKey: SessionInfos.macKey,
        })
        return true
    } catch (err) {
        console.log(err)
        return { status: false, message: 'Register failed' }
    }
}
export async function SessionDelete(session) {
    try {
        let delete_id = null
        delete_id = await ClientSession.findOne({ session })
        await ClientSession.findByIdAndRemove(delete_id._id)
        return true
    } catch (err) {
        return false
    }
}
