import { createApp } from 'vue';
// import App from './components/App.vue';
import App from './App.vue';
// import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

import "@fortawesome/fontawesome-free/css/all.min.css";

let app = createApp(App)

let router = createRouter({
  history: createWebHistory(),
  routes: import.meta.hot ? [] : routes,
})

if (import.meta.hot) {
  let removeRoutes = []

  for (let route of routes) {
    removeRoutes.push(router.addRoute(route))
  }

  import.meta.hot.accept('./routes.js', ({ routes }) => {
    for (let removeRoute of removeRoutes) removeRoute()
    removeRoutes = []
    for (let route of routes) {
      removeRoutes.push(router.addRoute(route))
    }
    router.replace('')
  })
}

app.use(router)
app.mount("#app")
