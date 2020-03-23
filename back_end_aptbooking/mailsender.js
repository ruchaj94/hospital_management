var email  = require('emailjs/email');
var server  = email.server.connect({
    user:    "rucha27jambhulkar", 
    password:"kiranprakash", 
    host:    "smtp.gmail.com", 
    ssl:     true,
    port: 465
 });


 function senMail(from, to, subject, body, cb){
    server.send({
        text:    "Your message body text", 
        from:    from, 
        to:     to,
        subject:  subject,
        attachment: 
        [
           {data: body, alternative:true},
        //    {path:"user/desktop/file.pdf", type:"application/pdf", name:"renamed.pdf"}
        ]
     }, function(err, message) { 
           cb(err, err ? null : {success: true, msg: 'sent'});
      });   
 }

 module.exports = {
    senMail: senMail
}