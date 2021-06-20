import jwt from 'jsonwebtoken'
export async function CheckToken(req, res, next) {
    const token = req.headers['x-acess-token'];
    console.log(token)
    const { api_key } = req.headers;
    jwt.verify(token, api_key, (err, decoded) => {
        if (err) return res.status(401).json({ status: false, message: 'Authentication Failed' }).end();
        next();
    })
}