//use express
const express = require('express');

const app = express();
const axios = require('axios')

app.get('/', function(req,res){
  axios
    .get("https://api.myjson.com/bins/wm0f7")
    .then(response => {

        res.send(`<h1>${response.data.name}</h1><h2>${response.data.age}</h2><h3>${response.data.occupation}</h3>`)
    })
    .catch(error => {
      console.log(error);
    });

})

app.listen(3000, function(){
  console.log('Listening on 3000')
})
