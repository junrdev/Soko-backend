const { App } = require("./App");
const connectDb = require('./util/connect.db')


if(process.env.NODE_ENV === 'development'){
    require('dotenv/config');

    const morgan = require('morgan');
    App.use(morgan('dev'));

}

connectDb();

const PORT = process.env.PORT || 3000

App.listen(PORT, ()=>{
    console.log(`Server started at Port : ${PORT}`);
})