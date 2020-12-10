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
    let favIDs = await db.RestaurantFavorites.findFavIdbyUserId(req.params.userid);
    await Promise.all(favIDs[0].map(async (restaurant) => {
      try {
        let currentRestaurant = await db.RestaurantFavorites.getOne(restaurant.restaurantid)
        buzzing.push(currentRestaurant[0])
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