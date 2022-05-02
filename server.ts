/*if(process.env.NODE_ENV !== 'production'){
    require('dotenv').load();
}*/

const express = require('express');
const app = express();
const port = 8080;
const bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get('/', (req: any, res: any)=> {
    res.status(200).json({message: 'Hi!'});
});

/*const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', error => console.log(error));
db.once('open', () => console.log('Connected to Mongoose'));
*/

const userRouter = require("./routes/users");
const beerRouter = require("./routes/beers");

app.use("/users", userRouter);
app.use("/beer", beerRouter);

app.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));