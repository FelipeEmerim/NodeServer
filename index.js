const express = require('express');
const path = require('path');
const ip = require('ip');
const app = express();

app.use(express.static('public'));
app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + '/public/Battleships.html'));
});


app.all('/*',function(req,res){
    res.redirect('/');

});

app.listen(3000, () => console.log('BattleShips server online at ip '+ip.address()+' port 3000!'));