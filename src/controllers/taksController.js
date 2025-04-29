const tasksManager = require("../models/tasksManager")

const tasksController = { 

index: ( req, res ) => {
    res.render('index')
},

app: (req, res) => {
    const tasks = tasksManager.getAllLists()
    res.render('app', { tasks })
},
task: (req, res) => {
    const id = req.params.id
    const list = tasksManager.getAllListsById(id)
    if (!list) {
        return res.render('error', { message: 'Lista não encontrada' })
    }
    res.render('task', { list })
},

newList: (req, res) => {
    res.render('newList')
},

saveList:(req, res) => {
    const { nameList } = req.body
    if (!nameList || nameList.trim() === '') {
        return res.render('newList', { error: 'O nome da lista não pode estar vazio' })
    }
    const list = tasksManager.createList(nameList)
    tasksManager.saveList(list)
    res.redirect('/app')
},

saveTask:(req, res) => {
    const { nameTask } = req.body
    const id = req.params.id
    const list = tasksManager.getAllListsById(id)

    if (!nameTask || nameTask.trim() === '') {
        return res.render('task', { list, error: 'O nome da tarefa não pode estar vazio' })
    }

    if (!list) {
        return res.render('error', { message: 'Lista não encontrada' })
    }

    const task = tasksManager.createTask(nameTask)
    tasksManager.saveTask(task, id)
    res.redirect(`/tarefa/${id}`)
},

deleteList: (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.render('error', { message: 'ID da lista não fornecido' })
    }

    const listExists = tasksManager.getAllListsById(id)
    if (!listExists) {
        return res.render('error', { message: 'Lista não encontrada' })
    }

    tasksManager.deleteList(id)
    res.redirect('/app')
},

completTask: (req, res) => {
    const { id, idTask } = req.params
    if (!id || !idTask) {
        return res.status(400).render('error', { message: 'IDs da lista ou tarefa não fornecidos' })
    }

    const listExists = tasksManager.getAllListsById(id)
    if (!listExists) {
        return res.status(404).render('error', { message: 'Lista não encontrada' })
    }

    const taskExists = listExists.tasks.find(task => task.id === idTask)
    if (!taskExists) {
        return res.status(404).render('error', { message: 'Tarefa não encontrada' })
    }

    tasksManager.concludedTask(id, idTask)
    res.redirect(`/tarefa/${id}`)
}
}

module.exports = tasksController