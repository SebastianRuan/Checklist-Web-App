const express = require('express');

const app = express();

app.get('/add', (requrest, response) => {
    console.log("request received");
    response.send("hello");
})

app.listen(3000,()=>console.log('App is running'));