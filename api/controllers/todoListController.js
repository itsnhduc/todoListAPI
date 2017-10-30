const mongoose = require('mongoose')
const Task = mongoose.model('Tasks')

const handler = (err, res, resJson) => {
  if (err) res.send(err)
  res.json(resJson)
}

exports.listTask = (req, res) => {
  Task.find({}, (err, task) => handler(err, res, task))
}

exports.createTask = (req, res) => {
  const newTask = new Task(req.body)
  newTask.save((err, task) => handler(err, res, task))
}

exports.readTask = (req, res) => {
  Task.findById(req.params.taskId, (err, task) => handler(err, res, task))
}

exports.updateTask = (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, (err, task) => handler(err, res, task))
}

exports.deleteTask = (req, res) => {
  Task.remove({_id: req.params.taskId}, (err, task) => handler(err, res, { message: 'Task successfully deleted' }))
}