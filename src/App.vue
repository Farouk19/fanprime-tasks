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
  <tasks-list v-if="store.tasksList" :tasks="store.tasksList"></tasks-list>
</template>

<style scoped>
</style>
