const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const db = require('./query/db.js')

app.disable('x-powered-by')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())

const reservationsRouters = require('./src/routers/reservations.js')
app.use('/reservations', reservationsRouters)

app.use((err, req, res, next) => {
  const status = err.status
  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

module.exprots = app
