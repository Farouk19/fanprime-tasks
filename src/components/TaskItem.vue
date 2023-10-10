<script setup>
import { ref } from 'vue'

import { useTaskStore } from '../stores/task'

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
  if (!this.newTaskName) {
    this.showValidationMessage = true
    return
  }
  store.editTask(taskId, taskName)
  this.isEditing = false
  this.newTaskName = ''
}
</script>

<template>
  <div class="task-container">
    <li :class="{ completed: task.completed }">
      <p>{{ task.name }}</p>
      <input type="checkbox" @change="changeTaskState(task.id)" :checked="task.completed" />
    </li>
    <div v-if="isEditing" class="actions-container">
      <input type="text" v-model="newTaskName" />
      <p v-if="showValidationMessage">Please enter a valid task name</p>
      <button @click="cancelEditingTask()">Cancel</button>
      <button @click="confirmEditingTask(task.id, newTaskName)">Save</button>
    </div>
    <div v-else class="actions-container">
      <button @click="startEditingTask()">Edit</button>
      <button @click="removeTask(task.id)">Delete</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
p {
  color: red;
}

li {
  display: flex;
  flex-grow: 1;
  justify-content: space-around;
  gap: 10px;
  margin: 10px 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  p {
    margin: 0;
    font-size: 1rem;
    color: rgb(18, 134, 228);
  }

  &.completed {
    text-decoration: line-through;
    opacity: 0.6;
  }
}

.task-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
}
</style>
