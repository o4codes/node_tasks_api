const app = require('express')();
const { json } = require("express");
const mongooose = require('mongoose');
const todo_router = require('./routers/todo_routes');
require('dotenv').config();


const connectionString = process.env.MONGO_DB_URL;

mongooose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (err) {
        console.log({ err });
    } else {
        console.log('Connected to MongoDB');
    }
});

app.use(json());
app.use('/todos', todo_router);

app.listen(3000, () => console.log('Server started on port 3000'));