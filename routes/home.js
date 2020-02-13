// routes/home.js

var express = require('express');
var router = express.Router();

// Home 프로젝트 리스트 가져옴
router.get('/', function(req, res){
  res.render('index');
});
//
// //프로젝트 생성 페이지
// app.get('/project', function(req, res){
//   res.render('projects/new ')
// });
//
// // 프로젝트 생성
// app.post('/project/create', function(req, res){
//   Project.create(req.body, function(err, contact){
//     if(err) return res.json(err);
//     res.redirect('/');
//   });
// });


module.exports = router;
