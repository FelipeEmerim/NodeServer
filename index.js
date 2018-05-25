const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname+'/public/Battleships.html')));
app.listen(3000, () => console.log('BattleShips server online at port 3000!'));