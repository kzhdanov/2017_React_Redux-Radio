var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conf = require('../config');
var pool = mysql.createPool(conf);
var jwt = require('jsonwebtoken');
var album = require('../Models/AlbumModel')(pool);

///АДМИНИСТРАТИВНАЯ ЧАСТЬ///
var tempAuth = { login: 'Ivan', password: 'EgorLetov@!' };

///ЛОГИН
router.post('/login', function (req, res) {
  if(req.body) {
    if(tempAuth.login === req.body.login && tempAuth.password === req.body.pass) {
       var token = jwt.sign({
          id: '3F75BB54-3C85-45D6-BD0C-A58EE779B8B5',
          username: tempAuth.login
        }, conf.jwtSecret);

        return res.json({ token });
    }
  } 

  return res.status(401).json({ errors: { form: 'Invalid Credentials' } });
});

///ПРОВЕРКА ТОКЕНА
router.post('/checkToken', function(req, res) {
  if(req.body && req.body.token) {
    try {
      var decoded = jwt.verify(req.body.token, conf.jwtSecret);

      if(decoded && decoded.username === tempAuth.login)
        return res.json({ isAuth: true });
      
    } catch(ex) {
      return res.status(401).json({ errors: 'Invalid token', isAuth: false });
    }
  }
})

///ПОЛУЧИМ НЕДЕЛЮ
router.get('/getWeek', function (req, res) {
  album.GetLastWeekNumber(null, function (err, weekNumber) {
    if (!err) {
      if (weekNumber[0].Number !== null) {
        album.GetAlbumsByWeekAll(weekNumber[0].Number, function (err, al) {
          if (!err)
            res.json(al);
          else
            return res.json({ error: 'something went wrong' });
        });
      } else
        return res.json({ error: 'week number error #2' });

    } else 
      return res.json({ error: 'week number error #1' });
    
  });
});

///ПОИСК НЕДЕЛИ ПО НОМЕРУ
router.post('/getWeekByNumber', function (req, res) {
  album.GetAlbumsByWeekAll(req.body.week, function (err, al) {
    if (!err) 
      res.json(al)
    else
      return res.json({ error: 'get week by number error' });
  });
});

///СОХРАНЕНИЕ НОВОГО ЭЛЕМЕНТА
router.post('/Save', function (req, res) {
  try {
    if (req.body != null) {
      var reqAlbum = req.body;

      if (reqAlbum.IsVisible)
        reqAlbum.IsVisible = true;
      else
        reqAlbum.IsVisible = false;

      reqAlbum.dateCreate = new Date();

      album.SaveAlbum(reqAlbum, function (error, data) {
        if (!error)
          res.json({ error: 'success' });
        else
          res.json({ error: 'saving error' });
      });
    }
  } catch (e) {
    res.json({ error: 'saving error catch blok' });
  }
});

///УДАЛЕНИЕ
router.post('/Delete', function (req, res) {
  try {
    if (req.body.id) {
      album.DeleteAlbum(req.body.id, function (err, data) {
        if (!err)
          res.json({ type: 'success' });
        else
          res.json({ type: 'error' });
      });
    }
  } catch (e) {
    res.json({ type: 'error' });
  }
});

///РЕДАКТИРОВАНИЕ СУЩЕТВУЮЩЕЙ СУЩЬНОСТИ
router.post('/Edit', function (req, res) {
  try {
    if (req.body) {
      var reqAlbum = req.body;

      if (reqAlbum.IsVisible)
        reqAlbum.IsVisible = true;
      else
        reqAlbum.IsVisible = false;

      album.EditAlbumSave([reqAlbum, reqAlbum.id], function (err, data) {
        if (!err)
          res.json({ type: 'success' });
        else
          res.json({ type: 'error' });
      });
    }
  } catch (e) {
    res.json({ type: 'error' });
  }
});

module.exports = router;