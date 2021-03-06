const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const Task = require('./api/models/todoListModel')
const bodyParser = require('body-parser')
const routes = require('./api/routes/todoListRoutes')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/Tododb', {
  useMongoClient: true
})

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

routes(app)

app.listen(port, () => {
  console.log('todo list RESTful API server started on: ' + port)
})
