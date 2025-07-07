const mongoose = require('mongoose');

const URL = "mongodb://localhost:27017/DearNotes";

const Connect = ()=>{
    mongoose.connect(URL).then(() => {
        console.log("Connected to Database successfully....");
    })
};

module.exports = Connect;