import { beersInitialState } from "../constants/beers";
import { Beer } from "../interfaces/beer.interface";

const expressBeer = require('express');
const router = expressBeer.Router();

let beers: Array<Beer> = beersInitialState;

router
  .route("/:id")
  .get((req: any, res: any) => {
    res.json(beers.filter((beer: Beer) => beer.id == req.params.id));
  })
  .delete((req: any, res: any) => {
    beers = beers.filter((beer: Beer) => beer.id != req.params.id);
    res.json(beers);
  });

  router.get("/", (req: any, res: any) => {
    
    res.send(beers);
});

module.exports = router;