const express = require('express')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const port = process.env.PORT || 3001
const cors = require('cors')

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Portofolio backend is running')
})

app.listen(port, () => {
  console.log(`Started listening on port ${port}`)
})

app.post('/email', async (req, res) => {
  const { email, message } = req.body

  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).send('Invalid email address')
  }

  if (typeof message !== 'string' || !message.trim()) {
    return res.status(400).send('Message cannot be empty')
  }

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
    subject: `New message from the portofolio App! Sent by: ${email}`,
    text: message,
  }

  try {
    const info = await transporter.sendMail(options)
    console.log("Sent: " + info.response)
    res.status(201).send('Email sent successfully')
  } catch (err) {
    console.error("Failed to send email:", err)
    res.status(500).send('Failed to send email')
  }
})
