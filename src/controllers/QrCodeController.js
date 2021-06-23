import { QRCodeArr } from '../util/SessionUtil'
//Iniciar nova sessão
export async function GetQrCode(req, res) {
    const { session } = req.query
    if (QRCodeArr[session]) {
        await res.status(200).json({ status: true, qrcode: QRCodeArr[session] })
    } else {
        await res.status(401).json({ status: false, message: 'session not found' })
    }
}
