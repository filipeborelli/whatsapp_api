import api from 'axios'
import { ClientSession } from '../models/sessions'
export async function PostWebHook(session, data) {
    try {
        const webhookurl = await ClientSession.findOne({ session })
        if (webhookurl.webhook) {
            await api.post(webhookurl.webhook, Object.assign({ event: 'Message', session: session }, data))
        }
    } catch (e) {
        return false
    }
}
