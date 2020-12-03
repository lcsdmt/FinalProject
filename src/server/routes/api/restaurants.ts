import * as express from 'express';
import db from '../../db';


const router = express.Router();

router.get('/:id?', async (req, res) => {
    console.log('works')
    let id = req.params.id;

    if (id) {
        try {
            
            let restaurant = await db.Restaurants.findOneById(id);
            let Rtags = await db.RestaurantTags.oneRestaurantTag(id);
           
            res.json({
                restaurant: restaurant[0],
                tags: Rtags,
            });
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    } else {
        try {
            
            res.json(await db.Restaurants.allRestaurants())
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    }
   
});


export default router;