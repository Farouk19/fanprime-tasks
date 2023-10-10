<script setup>
import { useTaskStore } from '../stores/task'
import TaskItem from './TaskItem.vue'

// To better respect the single responsibility principle, passing tasks as props to this component should be avoided since only this component
// should be responsible of managing tasks, but it's needed it we want to implment the bonus routing task of the assignment
defineProps({
  tasks: {
    type: Object,
    required: true
  }
})

const store = useTaskStore()

function markAllTasksAsComplete() {
  store.markAllTsksAsComplete()
}

function removeAllTasks() {
  store.removeAllTasks()
}
</script>

<template>
  <ul>
    <task-item v-for="task in tasks" :key="task.id" :task="task"> </task-item>
  </ul>
  <div class="tasks-container">
    <div v-if="tasks.length" class="actions-container">
      <button @click="removeAllTasks()">Clear All Tasks</button>
      <button @click="markAllTasksAsComplete()">Mark All As Complete</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;
  place-items: center;
}

.tasks-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
