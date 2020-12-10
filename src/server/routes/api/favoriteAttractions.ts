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
    let favIDs = await db.AttractionFavorites.findFavIdbyUserId(req.params.userid);
    await Promise.all(favIDs[0].map(async (attraction) => {
      try {
        let currentAttraction = await db.AttractionFavorites.getOne(attraction.attractionsid)
        buzzing.push(currentAttraction[0]);
        // buzzing.push(currentAttraction[0].description)
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