import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import config from '../../../config';
import db from '../../../db';

export const CreateToken = async (payload: IPayload) => {
    let tokenid: any = await db.AccessTokens.insert(payload.userid);
    payload.accesstokenid = tokenid.insertID;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload.accesstokenid, config.auth.secret)
    await db.AccessTokens.update(payload.accesstokenid, token);
    return token;
}

export const ValidToken = async (token: string) => {
    console.log(token);
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstokenid] = await db.AccessTokens.findOne(payload.accesstokenid, token);
    if(!accesstokenid) {
        throw new Error('Invalid Token!');
    } else {
        return payload;
    }
}

export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}