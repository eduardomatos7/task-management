const express = require('express')
const tasksController = require('./controllers/taksController')

const router = express.Router()

router.get('/', tasksController.index)

router.get('/app', tasksController.app)


router.get('/adicionar', tasksController.newList)

router.post('/saveList', tasksController.saveList)

router.post('/createList', tasksController.saveList)

router.post('/saveTask/:id', tasksController.saveTask)

router.get('/tarefa/:id', tasksController.task)

router.get('/delete/:id', tasksController.deleteList)
router.post('/tarefa/:id/completed/:idTask', tasksController.completTask)

module.exports = router