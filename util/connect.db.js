const mongoose = require('mongoose');


module.exports = async () =>{

    // const uri = process.env.NODE_ENV === 'development' ? 
    const uri = process.env.mongodburl

    await mongoose.connect(uri).then(()=>{
        console.log(`Connected to database`);
    }).catch((err) =>{
        console.log(`Failed to connect to db error : ${err}`);
    });
}