import { createRouter, createWebHistory } from 'vue-router'

// import CompletedTasksView from '../views/CompletedTaskView.vue'
// import IncompletedTasksView from '../views/CompletedTaskView.vue'

// I wanted to implement the routes but got some errors

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/completed-tasks',
//       name: 'completed',
//       component: CompletedTasksView
//     },
//     {
//       path: '/incompleted-tasks',
//       name: 'incompleted',
//       component: IncompletedTasksView

//     }
//   ]
// })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

export default router
