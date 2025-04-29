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
    res.render('task', { list })
},

newList: (req, res) => {
    res.render('newList')
},

saveList:(req, res) => {
    const { nameList } = req.body
    const list = tasksManager.createList(nameList)
    tasksManager.saveList(list)
    res.redirect('/app')
},
saveTask:(req, res) => {
    const { nameTask } = req.body
    const id = req.params.id
    const task = tasksManager.createTask(nameTask)
    tasksManager.saveTask(task, id)
    res.redirect(`/tarefa/${id}`)
},
deleteList: (req, res) => {
   const { id } = req.params
   tasksManager.deleteList(id)
   res.redirect('/app')
},
completTask: (req, res) => {
    const { id, idTask } = req.params
    tasksManager.concludedTask(id, idTask)
    res.redirect(`/tarefa/${id}`)

}
}


module.exports = tasksController