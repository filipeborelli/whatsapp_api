export let APISession = []
export let sessions = []
export let QRCodeArr = []
export let ClientAttempts = []
export let SessionInfos = []
export let SessionStatus = []
export const WEBHOOK_URL = process.env.WEBHOOK_URL || false

if (!WEBHOOK_URL) {
    console.warn('Variável ambiente "WEBHOOK_URL" não está definido, webhooks desativado')
}
