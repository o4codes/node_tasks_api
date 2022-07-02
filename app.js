const app = require('express')();
const { json } = require("express");
const mongooose = require('mongoose');
const todo_router = require('./routers/todo_routes');


const connectionString = 'mongodb://localhost:27017/todo';

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