const mongoose = require('mongoose');

require('dotenv').config({path: 'variables.env'});

const conectarDB = async () =>{
    try{
        await mongoose.connect(process.env.DB_MONGO, {
            //TODO Cambiar esta deprecado
            userNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Conectada');
    }catch(error){
        console.log(error);        
        process.exit(1);
    }
}

module.exports = conectarDB;