import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';

import config from '../../config';
import db from '../../db';

export const CreateToken = async (payload: IPayload) => {
    let tokenid: any = await db.AccessTokens.insert(payload.userid);
    payload.accesstokenid = tokenid.insertId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload.accesstokenid, config.auth.secret)
    //console.log("This is token", token);
    await db.AccessTokens.update(payload.accesstokenid, token);
    // await db.AccessTokens.update(payload.userid);
    return token;
}

export const ValidToken = async (token: string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let [accesstokenid] = await db.AccessTokens.findOne(payload.accesstokenid, token);
    if(!accesstokenid) {
        throw new Error('Invalid Token!');
    } else {
        return accesstokenid;
    }
}

export interface IPayload {
    [key: string]: any;
    userid: number;
    unique?: string;
}