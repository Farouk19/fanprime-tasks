<script setup>

import { ref } from 'vue'

import { useTaskStore } from '../stores/TaskStore'

defineProps({
  task: {
    type: Object,
    required: true
  }
})

const newTaskName = ref('')

const showValidationMessage = ref(false)

const store = useTaskStore()

const isEditing = ref(false)

function removeTask(taskId) {
  this.store.removeTask(taskId)
}

function changeTaskState(taskId) {
  this.store.changeTaskState(taskId)
}

function startEditingTask() {
  this.isEditing = true
}

function cancelEditingTask() {
  this.isEditing = false
}
function confirmEditingTask(taskId, taskName) {
  if(!this.newTaskName) {
    this.showValidationMessage = true
    return
  }
  store.editTask(taskId, taskName)
  this.isEditing = false
}


</script>

<template>
    <li :class="{ taskContainer: true, completed: task.completed }">
      <p>{{ task.name }}</p>
      <template v-if="isEditing">
      <input type="text" v-model="newTaskName">
      <p v-if="showValidationMessage">Please enter a valid task name</p>
      <button @click="cancelEditingTask()">Cancel</button>
      <button @click="confirmEditingTask(task.id, newTaskName)">Save</button>
    </template>
      <input type="checkbox" @change="changeTaskState(task.id)" :checked="task.completed">
      <button @click="startEditingTask()">Edit</button>
      <button @click="removeTask(task.id)">Delete</button>
    </li>
</template>

<style scoped lang="scss">

p {
    color: red;
}

li {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        padding: 10px;
        background-color: rgba(255, 255, 255, 0.95); 
        border-radius: 5px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); 

        p {
            margin: 0;
            font-size: 16px;
            color: red;
        }

        &.completed {
            text-decoration: line-through;
            opacity: 0.6; 
        }
    }

.task-container {
    display: flex;
    place-items: center;
}

</style>
