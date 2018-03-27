const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const db = require('./query/db.js')

app.disable('x-powered-by')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())

// Serve frontend files from the frontend repo
app.use(express.static('../Just-Share-Dont-Buy-frontend'))

const reservationsRouters = require('./src/routers/reservations.js')
const itemsRouters = require('./src/routers/items.js');
const categoriesRouters = require('./src/routers/categories.js')
app.use('/reservations', reservationsRouters)
app.use('/item', itemsRouters)
app.use('/categories', categoriesRouters)

app.use((err, req, res, next) => {
  console.error(err.stack) // Log the stacktrace of any errors that happen
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

module.exports = app
