var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var conf = require('../config');
var pool = mysql.createPool(conf);
var album = require('../Models/AlbumModel')(pool);

///СТРАНИЦА НЕДЕЛИ///
router.get('/', function (req, res) {
  try {
    album.GetLastWeekNumber(null, function (err, weekNumber) {
      album.GetAlbumsByWeekActive(weekNumber[0].Number, function (err, data) {
        if (!err) {
          data.map((e, i) => {
            e.src = './TESTCovers/' + e.ImgName;
            e.title = e.BandName + ' -  «' + e.AlbumName + '» ';
          });

          res.send(JSON.stringify({
            items: data,
            weekNumber: weekNumber[0].Number.toString().substring(2),
            fullNumber: weekNumber[0].Number,
          }));

        }
      });
    });
  } catch (e) {
    res.render('Weeks.ejs', { items: null });
  }
});

///ПОЛУЧИМ НОМЕР НЕДЕЛИ
router.post('/getNumber', function (req, res) {
  try {
    album.GetLastWeekNumber(null, function (err, weekNumber) {
      if (!err)
          res.json({ type: 'success', number: weekNumber[0].Number.toString().substring(2) });
      else
        res.json({ type: 'error' });
    });
  } catch (e) {
    res.json({ type: 'error' });
  }
});

///ТУТ ПОЛУЧАЕМ ПЕЙДЖИНГОМ СТРАНИЦЫ
router.post('/getPrev', function (req, res) {
  try {
    if (req.body.week) {
      let weekNumber = req.body.week,
          tempStartNumber;

      if(weekNumber.toString().substring(2) == 0 
        || Number(weekNumber.toString().substring(2)) > 52) {
        tempStartNumber = Number(weekNumber.toString().substring(0,2)); 
        tempStartNumber = Number(tempStartNumber) - 1;
        weekNumber = tempStartNumber.toString() + 52;
      }
 
      album.GetAlbumsByWeekActive(weekNumber, function (err, data) {
        if (!err) {
          //let promises = [];
          data.map((e, i) => {
            //promises.push(GetMiddleRate({ album: e.AlbumName, autor: e.BandName }));

            e.src = './TESTCovers/' + e.ImgName;
            e.title = e.BandName + ' -  «' + e.AlbumName + '» ';
          });

          //Promise.all(promises).then(rates => {
          //  data.map((e, i) => {
          //    e.rate = rates[i];
          //  });
            
            res.send(JSON.stringify({
              items: data,
              weekNumber: Number(weekNumber).toString().substring(2),
              fullNumber: Number(weekNumber),
            }));
          //});
        } else {
          console.log(err);
          res.render('./partials/WeeksPartial.ejs', { items: null });
        }
      });
    }
  } catch (e) {
    console.log(e);
    res.render('./partials/WeeksPartial.ejs', { items: null });
  }
});

/*
//ПРИВАТНАЯ ФУНКЦИЯ ПОЛУЧАЕМ РЭЙТИНГ КАЖДОГО АЛЬБОМА
function GetMiddleRate(obj) {
  return new Promise((resolve, reject) => {
    rating.GetRatingMiddle(obj, (err, data) => {

      if (!err && data && data.length !== 0) {
        let rate = 0;
        data.map((e, i) => {
          rate += e.rate;
        });

        return resolve(parseInt(Math.round(rate / data.length)));
      } else
        return resolve(0);

    });
  });
};
*/

module.exports = router;