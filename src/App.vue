<script setup>
import { onMounted } from 'vue'
// import { RouterLink, RouterView } from 'vue-router'
import { useTaskStore } from './stores/task'

import TasksList from './components/TasksList.vue'
import AddTask from './components/AddTask.vue'

const store = useTaskStore()

onMounted(() => {
  store.fetchTasks()
})
</script>

<template>
  <h1>Tasks Management App</h1>
  <!-- I wanted to implement the navigation but got some errors -->
  <!-- <nav v-if="store.completedTasksList && store.incompletedTasksList">
        <RouterLink to="/completed">Completed Tasks</RouterLink>
        <RouterLink to="/incompleted">IncompletedTasks</RouterLink>
  </nav> -->
  <h3 v-if="!store.tasksList.length">No Tasks found, please click the button below to add some</h3>
  <div class="wrapper">
    <tasks-list v-if="store.tasksList" :tasks="store.tasksList"></tasks-list>
    <add-task></add-task>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 50px;
  color: #ffff;
  font-weight: bold;
  text-align: center;
}

h3 {
  color: #ffff;
  font-weight: bold;
  text-align: center;
}

.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
