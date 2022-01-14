const mongoose = require('mongoose');

exports.connect = () => {
    try{
        mongoose.connect('mongodb+srv://shamsherali:oXBtDnbD4uxjQAb5@cluster0.cobuj.mongodb.net/FinalProject?retryWrites=true&w=majority', {useNewUrlParser : true, useUnifiedTopology:true})
        console.log("connected");   
    }
     catch(err) {
         console.log("error");
        console.log(err);
        process.exit();
    }
} 