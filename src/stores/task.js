import { defineStore } from 'pinia'


export const useTaskStore = defineStore('TaskStore', {
    state: () => {
        return {
            // The list of tasks that would be an array of objects of type {id, name, completed}
            tasks: []
        }
    },

    getters: {
        tasksList(state) {
            return state.tasks
        },
    },
    actions: {
        fetchTasks() {
            // If there are some tasks in the localStorage, fetch them, otherwise set the tasks list to empty
            const savedTasks = JSON.parse(localStorage.getItem('tasks'))
            this.tasks = savedTasks ??  []
        },
        addTask(name) {
            // The new created task will be uncompleted by default
            // crypto.randomUUID() is used to set a unique Id for each task
            this.tasks.push({id: crypto.randomUUID(), name, completed: false})
            this.updateLocalDB()
        },
        removeTask(taskId) {
            this.tasks = this.tasks.filter(({id}) => id !== taskId)
            this.updateLocalDB()
        },
        editTask(taskId, name) {
            const taskToEditIndex = this.tasks.findIndex(({id}) => id === taskId)
            this.tasks[taskToEditIndex].name = name
            this.updateLocalDB()
        },
        // Set the task to completed / incompleted
        changeTaskState(taskId) {
            const taskToSetToCompletedIndex = this.tasks.findIndex(({id}) => id === taskId)
            // It should not be this.tasks[taskToSetToCompletedIndex].completed = false because the user could set 
            // the state of a task to completed by mistake, so he will be able to set it to incompleted again
            this.tasks[taskToSetToCompletedIndex].completed = !this.tasks[taskToSetToCompletedIndex].completed
            this.updateLocalDB()
        },
        markAllTsksAsComplete() {
            this.tasks.forEach((task) => task.completed = true)
            this.updateLocalDB()
        },
        updateLocalDB() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks))
        },
        removeAllTasks() {
            this.tasks = []
            localStorage.removeItem('tasks')
        }
    }

})