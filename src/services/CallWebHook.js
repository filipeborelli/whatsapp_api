import api from 'axios'
import { ClientSession } from '../models/sessions'
export async function PostWebHook(session, data, webhook) {
    try {
        if (webhook) {
            await api.post(webhook, Object.assign({ event: 'Message', session: session }, data)).then(response => {})
        }
    } catch (e) {
        return false
    }
}
