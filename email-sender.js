var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'outlook',
  auth: {
    user: 'issam_92jemaa@outlook.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'issam_92jemaa@outlook.com',
  to: 'bensalemabdelhafidh.go@gmail.com',
  subject: 'test',
  text: 'issam jemaa'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});