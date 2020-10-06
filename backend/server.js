const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const errorController = require('./controllers/error');
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next){
res.header("Access-control-Allow-Origin","*");
res.header('Access-control-Allow-Methods','DELETE, PUT, GET, POST');
res.header("Access-control-Allow-Headers","Origin, X-requested-With, Content-type, Accept,Authorization,token");
next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const api = require('./apiRoutes');
app.use('/api/v2',api);

let port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/projectManagement',{
   useNewUrlParser:true,
   useUnifiedTopology:true
}).then(result=>{
    app.listen(port, function () {
    console.log("Running backend on port " + port);
    });
})
.catch(err =>{
    console.log(err)
    throw err;
})



module.exports = app;

