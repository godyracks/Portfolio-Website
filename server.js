const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require("body-parser");
const path = require('path');
const connectDB = require('./server/database/connection');


const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//log requests morgan module allows us to log a req in the console
app.use(morgan('tiny'))

//mongodb connections
 connectDB();

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine", "ejs")
 //app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets inside this http server
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// app.get('/', (req, res ) => {
//     res.send("Crud Application")  // commented this code coz i dont want localhost:3000 to be displaying crudapp but index.ejs content
// });

app.get('/', (req, res ) => {
    res.render('index');
});



//load routers
 app.use('/', require('./server/routes/router'));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)       //curently i am using live server exte.
});
