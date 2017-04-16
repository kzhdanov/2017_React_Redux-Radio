'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var radioLink = 'http://eu3.radioboss.fm:8022/live';
var ws = require('./backend/ws');
var compression = require('compression');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/public/views');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  res.header('Access-Control-Allow-Headers',
  'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});

///ПОДКЛЮЧИМ WS///
ws.Start();

var weeks = require('./backend/Routers/weeks');
var admin = require('./backend/Routers/admin');

app.use('/weeks', weeks);
app.use('/RadioAdmin', admin);

///ГЛАВНАЯ РАДИО///
///ГЛАВНАЯ
app.get('/', function (req, res) {
  res.render('Index.ejs');
});

//ТУТ ОТКРЫВАЕМ РАДИО В НОВОМ ОКНЕ
app.get('/window/new', function (req, res) {
  res.render('./partials/WindowNew.ejs', { url: radioLink });
});

app.listen(8085, function () {
  console.log('Server successfully started on 8085 port');
});

/*
///Проверим есть ли рейтинг и если есть то верн]м оценку
app.post('/Rating/Get', function (req, res) {
  var obj = req.body;

  rating.GetRating(obj, function (error, data) {
    if (!error) {
      if (data[0] && data[0].rate) {
        res.send({ type: 'success', points: data[0].rate });
      } else {
        res.send({ type: 'success', points: 0 });
      }
    } else {
      console.log(error);
      res.send({ type: 'error', error: error });
    }
  });
});

///Сохраним рейтинг
app.post('/Rating/Save', function (req, res) {
  var obj = req.body;

  rating.SaveRating({
    id: utils.Guid(),
    autor: obj.autor,
    song: obj.song,
    album: obj.album,
    dateCreate: new Date(),
    rate: obj.rate,
    userTempId: obj.userTempId,
  }, function (error, data) {
    if (!error)
      res.send({ type: 'success' });
    else
      res.send({ type: 'error' });
  });
});
*/
