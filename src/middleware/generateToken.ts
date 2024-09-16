import jwt from 'jsonwebtoken';
import uservalid from '../interfaces/uservalid';

export default function generateAccessToken(user:uservalid) {
    return jwt.sign(user, process.env.TOKEN_SECRET as string, { expiresIn: '1h' });
}
