 const app = require('./src/app');
const mongoose = require('mongoose');

function connect() {
    mongoose.connect("mongodb+srv://pushpen:9AUKEAT3xUGl3SzP@cluster0.8vvbqe5.mongodb.net/")
    .then(() => {
        console.log("Connected to database");
    })

    }

connect();

 app.listen(3000, () => {
    console.log("Server is running on port 3000");
 });