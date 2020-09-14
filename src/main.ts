import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import init from './instance/init'

const instance = createApp(App)

init(instance)

instance
  .use(store)
  .use(router)
  .mount('#app')
