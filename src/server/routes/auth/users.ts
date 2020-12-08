import * as express from 'express';
import { RequestHandler } from 'express-serve-static-core';
import db from '../../db'

const router = express.Router();

interface ReqUser extends express.Request {
    user: {
        email: string,
        password: string,
        role: string,
        //commonly a user record from the database
    }
}

const isAdmin: RequestHandler = (req: ReqUser, res, next) => {
    //console.log("req.user", req)
    if (!req.user || req.user.role !== 'admin') {
        return res.sendStatus(401);
    } else {
        console.log("test")
        return next();
    }
};

router.get('/:id?', isAdmin, async (req, res, next) => {
    console.log('Users found', req.user);
    //isAdmin(req, res, next);
    let id = req.params.id;
    let email = req.params.email;
    if (id) {
        try {
            res.json((await db.Users.findOneById(id))[0]);
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    } else if (email) {
        try {
            res.json(await db.Users.findOneByEmail(email))
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
});

router.put('/:id', async (req, res) => {
    let email = req.params.email;

    console.log('Email has been updated!')
    try {
        res.json(await db.Users.updateEmail(email))
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.put('/:id', async (req, res) => {
    console.log('Password has been changed!')
    try {
        res.json(await db.Users.updatePassword(req.params.password));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

router.delete('/:id', async (req, res) => {
    console.log('User has been deleted!')
    try {
        res.json(await db.Users.deleteUser(req.params.id));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
})

export default router;