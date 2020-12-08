import * as express from 'express';
import db from '../../db';


const router = express.Router();

interface ReqUser extends express.Request {
  user: {
    role: string,
    email: string
    //commonly a user record from the database
  }
}

const isAdmin: express.RequestHandler = (req: ReqUser, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.sendStatus(401);
  } else {
    return next();
  }
};

router.get('/:userid', isAdmin, async (req, res) => {
  console.log('works')

  try {

    let favIDs = await db.RestaurantFavorites.findFavIdbyUserId(req.params.id);
    let favorites = favIDs.map(async (restaurant) => {
      let currentRestaurant = await db.RestaurantFavorites.getOne(restaurant.restaurantid)
      currentRestaurant[0].id = restaurant.id;
    })

    console.log(favorites) // []

    res.json(favorites);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }



});
export default router