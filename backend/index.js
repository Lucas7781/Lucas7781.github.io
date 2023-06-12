const express = require('express')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = 3001
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log("Hello World!")
})

app.listen(port, () => {
  console.log(`Started listening on port ${port}`)
})

app.post('/email', (req, res) => {
  let data = req.body;
  console.log(data)
  console.log(process.env.SENDER + "  " + process.env.PASSWORD)
  let transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.SENDER,
      pass: process.env.PASSWORD,
    }
  });
  const options = {
    from: process.env.SENDER,
    to: process.env.RECIPIENT,
    subject: `New message from the portofolio App! Sent by: ${data.email}`,
    text: data.message,
  }

  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err)
      return
    }
    console.log("Sent: " + info.response)
  })
  res.send('Email sent Successfuly')
  console.log("Finished!")
})