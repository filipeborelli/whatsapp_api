import { ClientSession } from '../models/sessions'
export async function NewSession(req, res) {
    const { session } = req.query
    const { webhook, clientID, serverToken, clientToken, encKey, macKey } = req.body
    let Session = null
    try {
        Session = await ClientSession.findOne({ session })
        if (Session) return res.status(400).json({ status: false, message: 'Session already exists' })
        const user = await ClientSession.create({ session, webhook, clientID, serverToken, clientToken, encKey, macKey })
        return res.status(200).json(user)
    } catch (err) {
        return res.status(400).json({ status: false, message: 'Register failed' })
    }
}
export async function FindSession(req, res) {
    const { session } = req.query
    let infos = null
    try {
        infos = await ClientSession.findOne({ session })
        return res.status(200).json(infos)
    } catch (err) {
        return res.status(400).json({ status: false, message: 'Session not found' })
    }
}

export async function SessionList(req, res) {
    try {
        const list = await ClientSession.find()
        return res.status(200).json(list)
    } catch (err) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}
export async function SessionUpdate(req, res) {
    const { session } = req.query
    const { webhook } = req.body
    let updateID = null
    try {
        updateID = await ClientSession.findOne({ session })
        await ClientSession.findByIdAndUpdate(updateID._id, {
            webhook,
        })
        return res.status(200).json({ status: true, message: 'Session update' })
    } catch (err) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}
export async function SessionDelete(req, res) {
    const { session } = req.query
    try {
        let delete_id = null
        delete_id = await ClientSession.findOne({ session })
        await ClientSession.findByIdAndRemove(delete_id._id)
        return res.status(200).json({ status: true, message: 'Session Deleted' })
    } catch (err) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}
