const mongoose = require('mongoose');


 function connectDatabase() {
    mongoose.connect(process.env.MONGO_URI).
    then(() => {
        console.log('connected to database');
        
    })
}

module.exports = connectDatabase;