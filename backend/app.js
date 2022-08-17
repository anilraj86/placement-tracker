const express = require('express');
const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
app.use(cors());
app.use(bodyparser.json());
const mongoose = require('mongoose');

// atlas database connection string 
mongoose.connect('mongodb+srv://peergroup3:RCihUzwg0QKasr4A@cluster0.jatgeoy.mongodb.net/placementtracker');

     

app.listen(process.env.PORT||8080, function(){
    console.log('Successfully listening to the port');
});

