<script setup>

import { onMounted } from 'vue';
import { useTaskStore } from './stores/task';

import  TasksList  from './components/TasksList.vue'

const store = useTaskStore()

onMounted(() => {
  store.fetchTasks()
})

</script>

<template>
  <h1>Tasks Management App</h1>
  <tasks-list v-if="store.tasksList" :tasks="store.tasksList"></tasks-list>
</template>

<style scoped>
h1 {
  margin-bottom: 50px;
  color: #ffff;
  font-weight: bold;
}
</style>
