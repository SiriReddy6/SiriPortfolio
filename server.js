const express = require('express')
const app = express();
const nodemailer = require('nodemailer')
const PORT = process.env.PORT || 3000;
var mongo = require('mongodb');

app.use(express.static('public'))
app.use(express.json())

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://SiriReddy6:Cannot1@cluster0.5zajoel.mongodb.net/myFirstDatabase";

app.get('/', (req,res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.post('/', (req,res) => {
    let result = 0;
    MongoClient.connect(url, async function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var myobj = { name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
            address:req.body.address,
            comments:req.body.comments};

        await dbo.collection("feedback").insertOne(myobj, function(err, res) {
          if (err) throw err;
          console.log("1 document inserted");
        });

        result = await  dbo.collection("feedback").countDocuments({});

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
            text: `Hello ${req.body.name}, \n   Thank you for your feedback! \n   you're my ${result} th honoured guest who left their feedback. \n-From Siri`, // plain text body
        };
        console.log("hello")
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                    return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
                res.render('index');
        });
        db.close();
      });
      console.log(req.body)
    })

    app.listen(PORT, ()=>{
        console.log("server is running")
    })
    // result = await  dbo.collection("feedbacks").countDocuments({});
    // console.log(req.body)

    // let transporter = nodemailer.createTransport({
    //  host: 'smtp.gmail.com',
    //  port: 465,
    //  secure: true,
    //  auth: {
    //      user: 'sirikarukonda6@gmail.com',
    //      pass: 'nqkcnsrmobzjyrjm' 
    //     }});

    //     let mailOptions = {
            
    //         from: 'Siri Chandana Karukonda <sirikarukonda6@gmail.com>', // sender address
    //         to: req.body.email, // list of receivers
    //         subject: 'Form Submission', // Subject line
    //         text: `Hello ${req.body.name}, Thank you for your feedback! -From Siri Chandana Karukonda`, // plain text body
    //     };
    //     console.log("hello")
    //     transporter.sendMail(mailOptions, (error, info) => {
    //         if (error) {
    //                 return console.log(error);
    //         }
    //         console.log('Message %s sent: %s', info.messageId, info.response);
    //             res.render('index');
    //     });
// })

// app.listen(PORT, ()=>{
//     console.log("server is running")
// })