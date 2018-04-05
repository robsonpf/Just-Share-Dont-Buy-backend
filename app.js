const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const morgan = require('morgan')
const db = require('./query/db.js')
const cors = require('cors')

var token = require('./query/token.js');

app.disable('x-powered-by')

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  // Serve frontend files from the frontend repo
  app.use(express.static('../Just-Share-Dont-Buy-frontend')) // this allows you to use local host and deploying will not conflict with production mode
}

const signUpRouters = require("./src/routers/signUp.js")
const loginRouters = require("./src/routers/login.js")

app.use("/signup", signUpRouters)
app.use("/login", loginRouters)

function authorize(req, res, next) {
  console.log("Validating User token");
  var auth = req.headers['authorization'];
  if(auth === null || auth === "") {
    res.status(400).send({"error": "Bad Request"})
    return;
  } else {
    token.validateJWT(auth, function(decoded, err) {
      if(err) {
        res.status(401).send({"error": "Unauthorized"})
        return;
      } else {
        next()
      }
    });
  }
}
app.use(authorize)

const reservationsRouters = require('./src/routers/reservations.js')
const itemsRouters = require('./src/routers/items.js');
const categoriesRouters = require('./src/routers/categories.js')
const usersRouters = require('./src/routers/users.js')
app.use('/reservations', reservationsRouters)
app.use('/items', itemsRouters)
app.use('/categories', categoriesRouters)
app.use('/users', usersRouters)

app.use((err, req, res, next) => {
  console.error(err.stack) // Log the stacktrace of any errors that happen
  const status = err.status || 500
  res.status(status).json({ error: err })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}!`)
})

module.exports = app
