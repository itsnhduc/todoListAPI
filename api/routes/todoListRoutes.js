const todoList = require('../controllers/todoListController')

const baseUrl = '/api'

module.exports = (app) => {
  app.route(baseUrl + '/tasks')
    .get(todoList.listTask)
    .post(todoList.createTask)

  app.route(baseUrl + '/tasks/:taskId')
    .get(todoList.readTask)
    .put(todoList.updateTask)
    .delete(todoList.deleteTask)
}