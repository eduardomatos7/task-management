const listsTasks = []

const tasksManager = {
    getAllLists: () => {
        return listsTasks
    },
    getAllListsById: (id) => {
        return listsTasks.find((task) => task.id === id)
    },
    createList: (name) => {
        const list = {
            id: Date.now().toString(),
            name: name,
            tasks: []
        }
        return list
    },
    createTask: (name) => {
        const task = {
        id: Date.now().toString(),
        name: name,
        completed: false
        }
        return task
    },
    saveTask: (task, id) => {
        const index = listsTasks.findIndex((task) => task.id === id)
        listsTasks[index].tasks.push(task)        
    },

    saveList: (list) => {
        listsTasks.push(list)
    },
    deleteList: (id) => {
        const indexList = listsTasks.findIndex(list => list.id === id)
        listsTasks.splice(indexList, 1)
    },
    concludedTask: (listId, taskId) => {
        const indexList = listsTasks.findIndex(list => list.id === listId)
        const indexTask = listsTasks[indexList].tasks.findIndex(task => task.id === taskId)
        listsTasks[indexList].tasks[indexTask].completed = true
    }
}
module.exports = tasksManager