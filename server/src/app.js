console.log('hello')
const express = require('express')
const bodyParser = require('body-parser') // for processing json data easily
const cors = require('cors')
const morgan = require('morgan')

const app = express() // build a server
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world!'
  })
})

app.listen(process.env.PORT || 8081)
