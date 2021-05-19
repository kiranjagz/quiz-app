const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();
const port = 8080;

var appPath = __dirname + '/src/';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    next();
});

router.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

app.get('/', (req, res) => {
    res.sendFile(appPath + 'index.html');
});
app.get('/game', (req, res) => {
    console.log('/game ' + req.method);
    res.sendFile(appPath + 'game/game.html');
});
app.get('/highscores', (req, res) => {
    res.sendFile(appPath + 'highscores/highscores.html');
});
app.get('/end', (req, res) => {
    res.sendFile(appPath + 'end/end.html');
});

app.use(express.static(appPath));
app.use('/', router);

app.listen(port, () => {
    console.log('listening on port: http://localhost:' + port);
});