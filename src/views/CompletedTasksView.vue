<script setup>
import { useTaskStore } from '../stores/task'
import TasksList from '../components/TasksList.vue'

const store = useTaskStore()
</script>

<template>
  <tasks-list :tasks="store.completedTasksList"></tasks-list>
</template>

<style lang="scss" scoped></style>
