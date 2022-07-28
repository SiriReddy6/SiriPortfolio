const express = require('express')
const app = express();
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/', (req,res) => {
    console.log(req.body)

    let transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 465,
     secure: true,
     auth: {
         user: 'sirikarukonda6@gmail.com',
         pass: 'nqkcnsrmobzjyrjm' 
        }});

        let mailOptions = {
            
            from: 'Siri Chandana Karukonda <sirikarukonda6@gmail.com>', // sender address
            to: req.body.email, // list of receivers
            subject: 'Form Submission', // Subject line
            text: `Hello ${req.body.name}, Thank you for your feedback! -From Siri Chandana Karukonda`, // plain text body
        };
        console.log("hello")
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                    return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
                res.render('index');
        });
})

app.listen(PORT, ()=>{
    console.log("server is running")
})