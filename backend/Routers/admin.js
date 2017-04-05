var basicAuth = require('basic-auth-connect');
var qs = require('querystring');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conf = require('../config');
var utils = require('../Utils');
var pool = mysql.createPool(conf);

///АДМИНИСТРАТИВНАЯ ЧАСТЬ///
var auth = basicAuth('Ivan', 'EgorLetov@!');
var album = require('../Models/AlbumModel')(pool);

///АДМИНКА
router.get('/', auth, function (req, res) {
  album.GetLastWeekNumber(null, function (err, weekNumber) {
    if (!err) {
      if (weekNumber[0].Number !== null) {
        album.GetAlbumsByWeekAll(weekNumber[0].Number, function (err, al) {
          if (!err)
            res.render('Admin.ejs', { Albums: al });
          else
            console.log(err);
        });
      } else {
        res.render('Admin.ejs', { Albums: null });
      }
    } else {
      console.log(error);
    }
  });
});

///ПОИСК
router.post('/Get', auth, function (req, res) {
  album.GetAlbumsByWeekAll(req.body.week, function (err, al) {
    if (!err)
      res.render('./partials/AdminPartial.ejs', { Albums: al });
  });
});

///СОХРАНЕНИЕ НОВОГО ЭЛЕМЕНТА
router.post('/Save', auth, function (req, res) {
  try {
    if (req.body.album != null) {
      var reqAlbum = qs.parse(req.body.album);

      if (reqAlbum.IsVisible)
        reqAlbum.IsVisible = true;
      else
        reqAlbum.IsVisible = false;

      reqAlbum.dateCreate = new Date();
      reqAlbum.id = utils.Guid();

      album.SaveAlbum(reqAlbum, function (error, data) {
        if (!error)
          res.json({ type: 'success' });
        else
          res.json({ type: 'error' });
      });
    }
  } catch (e) {
    res.json({ type: 'error' });
  }
});

///ПОЛУЧЕНИЕ СУЩЕТВУЮЩЕЙ СУЩЬНОСТИ ДЛЯ РЕДАКТИРОВАНИЯ
router.post('/Edit', auth, function (req, res) {
  try {
    if (req.body.id != null) {
      album.GetAlbumById(req.body.id, function (err, data) {
        if (!err)
          res.json({ type: 'success', data: data });
        else
          res.json({ type: 'error' });
      });
    }
  } catch (e) {
    res.json({ type: 'error' });
  }
});

///РЕДАКТИРОВАНИЕ СУЩЕТВУЮЩЕЙ СУЩЬНОСТИ
router.post('/EditSave', auth, function (req, res) {
  try {
    if (req.body.album) {
      var reqAlbum = qs.parse(req.body.album);

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

///УДАЛЕНИЕ
router.post('/Delete', auth, function (req, res) {
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

module.exports = router;