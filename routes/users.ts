const express = require('express');
import { userInitialState } from "../constants/users";
import { User } from "../interfaces/user.interface";

const router = express.Router();

let userId: number = 5;

let users: Array<User> = userInitialState;

router
  .route("/:id")
  .get((req: any, res: any) => {
    res.json(users.filter((user: any) => user.id === req.params.id)[0]);
  })
  .put((req: any, res: any) => {
    let user = users.filter((user: any) => user.id === req.params.id)[0];
    users = users.filter((user: any) => user.id !== req.params.id);
    
    user = {
        id: user.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    users = [
        ...users,
        user
    ];

    res.json(users);
  })
  .delete((req: any, res: any) => {
    users = users.filter((user: any) => user.id !== req.params.id);
    res.json(users);
  });

router.post("/", idIncreaser, (req: any, res: any) => {
    const user: User = {
        id: userId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    users = [
        ...users,
        user
    ];
    
    res.send(users)
});

function idIncreaser(req: any, res: any, next: any) {
    userId += 1;
    next();
}

module.exports = router