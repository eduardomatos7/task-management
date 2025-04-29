
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
        name: name
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
}
module.exports = tasksManager