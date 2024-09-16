const jwt = require('jsonwebtoken');

export default function generateAccessToken(user:uservalid) {
    return jwt.sign(user, process.env.TOKEN_SECRET, { expiresIn: '1h' });
}
