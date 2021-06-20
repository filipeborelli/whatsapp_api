import { APISession } from '../util/SessionUtil'

export async function GetProfilePic(req, res) {
    const { session } = req.query
    const { phone, isgroup } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const ppUrl = await APISession[session].getProfilePicture(phone + prefix) // leave empty to get your own
        return res.status(200).json({ status: true, result: true, pic: ppUrl })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function GetPersonStatus(req, res) {
    const { session } = req.query
    const { phone, isgroup } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const status = await APISession[session].getStatus(phone + prefix) // leave empty to get your own
        return res.status(200).json({ status: true, result: true, status: status })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}

export async function CheckNumber(req, res) {
    const { session } = req.query
    const { phone, isgroup } = req.body
    let prefix = isgroup ? '@g.us' : '@c.us'
    try {
        const status = await APISession[session].isOnWhatsApp(phone + prefix) // leave empty to get your own
        return res.status(200).json({ status: true, result: true, status: status })
    } catch (e) {
        return res.status(400).json({ status: false, message: 'Error' })
    }
}
