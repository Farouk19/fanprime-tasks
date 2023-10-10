<script setup>

import { onMounted } from 'vue';
import { useTaskStore } from './stores/task';

import  TasksList  from './components/TasksList.vue'
import AddTask from './components/AddTask.vue';

const store = useTaskStore()

onMounted(() => {
  store.fetchTasks()
})

</script>

<template>
  <h1>Tasks Management App</h1>
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
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}
</style>
