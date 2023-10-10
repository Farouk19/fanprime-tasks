<script setup>
import { ref } from 'vue'

import { useTaskStore } from '../stores/task';

const taskName = ref('')
const showValidationMessage = ref(false)

const store = useTaskStore()

function addTask() {
    const name = this.taskName
    if (name.length === 0) {
      this.showValidationMessage = true
      return
    }
    debugger
    console.log(name)
    store.addTask(name)
    this.taskName = ''
    this.showValidationMessage = false
}
</script>

<template>
     <form @submit.prevent="addTask()">
    <input id="task-name" type="text" v-model="taskName">
    <p v-if="showValidationMessage">Please enter a valid task name</p>
  <button type="submit">Add Task</button>
  </form>
</template>

<style lang="scss" scoped>
p {
  color: red
}
</style>