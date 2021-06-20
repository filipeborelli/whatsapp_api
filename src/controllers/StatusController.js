import { SessionStatus } from "../util/SessionUtil";
//Iniciar nova sessão
export async function CheckConnection(req, res) {
    const { session } = req.query;
    if (SessionStatus[session]) {
        return res.status(200).json({ result: SessionStatus[session] })
    } else {
        return res.status(200).json({ result: 'NOT_FOUND' })
    }
}