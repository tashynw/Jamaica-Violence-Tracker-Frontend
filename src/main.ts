import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/css/Navbar.css'
import '@/css/Home.css'
import '@/css/About.css'
import { Loading } from 'vant'

createApp(App)
  .use(router)
  .use(Loading)
  .mount('#app')
