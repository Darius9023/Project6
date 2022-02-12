const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

// mongoose.connect(url, {userNewUrlParser:true})
// const con = mongoose.connection



app.use((req, res, next) => {
    console.log('Request received 1');
    next();

});


app.use((req, res, next) => {
    res.status(201);
    next();
});


app.use((req, res , next) =>{
    res.json({ message: 'Your request w successful'});
});

app.use((req, res, next) => {
    console.log('Response sent successfuly');
});


module.exports = app;