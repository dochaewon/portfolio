// routes/home.js

var express = require('express');
const nodemailer = require('nodemailer');
var router = express.Router();

// Home 프로젝트 리스트 가져옴
router.get('/', function(req, res){
  res.render('index');
});

router.post("/", function(req, res, next){
  let email = req.body.email;
  let message = req.body.message;
  let phone = req.body.phone;
  let name = req.body.name;

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'winniee940124@gmail.com',  // gmail 계정 아이디를 입력
      pass: 'aaAA11!!'          // gmail 계정의 비밀번호를 입력
    }
  });

  let mailOptions = {
    from: 'winniee940124@gmail.com',    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
    to: 'winniee940124@gmail.com' ,                     // 수신 메일 주소
    subject: email+'_'+phone+'_'+name,   // 제목
    text: message  // 내용
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    }
    else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.redirect("/");
})

module.exports = router;
