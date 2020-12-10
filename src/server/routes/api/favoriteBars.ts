import * as express from 'express';
import db from '../../db';

const router = express.Router();

interface ReqUser extends express.Request {
  user: {
    role: string,
    email: string
  }
}

router.get('/:userid', async (req, res) => {
  try {
    let buzzing = [];
    let favIDs = await db.BarFavorites.findFavIdbyUserId(req.params.userid);
    await Promise.all(favIDs[0].map(async (bar) => {
      try {
        let currentBar = await db.BarFavorites.getOne(bar.barsid)
        buzzing.push(currentBar[0])
      } catch (err) {
        console.error(err);
      }
    }))
    res.send(buzzing);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
    }
});

export default router