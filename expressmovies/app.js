const express = require('express');
const app = express();

app.get('/', function(req,res){
    res.send('Hello world!'); 
})

app.listen(8000,function(){
    console.log('Listen port 8000');
})