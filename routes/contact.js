var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact us' });
});

router.post('/send', function(req, res, next){
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user: 'atomar1410@gmail.com',
            pass: 'Santos@123'
        }
    });

    var mailOptions = {
        from: 'admin@twilabs.com <Twilabs>',
        to: 'atomar1410@gmail.com',
        subject: 'Website submission',
        text: 'You have a new submission in twilabs with following details\nName: ' +req.body.fname+ ' '+req.body.lname+ '\nEmail: '+req.body.email+'\nPhone: '+req.body.phone+'\nMessage: '+req.body.message, 
        html: '<p>You have a new submission in twilabs with following details</p><ul><li>'+req.body.fname+ ' '+req.body.lname+'</li><li>'+req.body.email+'</li><li>'+req.body.phone+'</li><li>'+req.body.message+'</li></ul>'
    };
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err);
            res.redirect('/');
        }else{
            console.log('message sent' + info.response);
            res.redirect('/');
        }
    });
});

module.exports = router;
