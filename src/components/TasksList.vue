<script setup>

import TaskItem from './TaskItem.vue';
import AddTask from './AddTask.vue';

// To better respect the single responsibility principle, passing tasks as props to this component should be avoided since only this component
// should be responsible of managing tasks, but it's needed it we want to implment the bonus routing task of the assignment 
defineProps({
  tasks: {
    type: Object,
    required: true
  }
})

function markAllTasksAsComplete() {
  store.markAllTsksAsComplete()
}

function removeAllTasks() {
  store.removeAllTasks()
}

</script>

<template>
    <div class="wrapper">
    <ul>
        <task-item
            v-for="task in tasks"
            :key="task.id"
            :task="task">
        </task-item>
    </ul>
    <add-task></add-task>
  <button @click="removeAllTasks()">Clear All Tasks</button>
  <button @click="markAllTasksAsComplete()">Mark All As Complete</button>
</div>
</template>

<style lang="scss" scoped>

ul {
    list-style: none;
    padding: 0;
    place-items: center;
}
</style>