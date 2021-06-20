import jwt from 'jsonwebtoken'
import configs from '../configs/configs.json'
export async function SignToken(req, res) {
    const { api_key } = req.headers;
    if (api_key === process.env.SECRET_KEY) {
        const token = jwt.sign({ user: 'WhatsApp' }, process.env.SECRET_KEY, { expiresIn: configs.token_valid })
        return res.status(200).json({ status: true, token })
    } else return res.status(401).json({ status: false, message: 'Check API KEY' })
}