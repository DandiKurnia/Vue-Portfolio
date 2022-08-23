import { createApp } from 'vue'
import Particle from 'vue3-particles'
import { createPinia } from 'pinia'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

library.add(fas, faGithub, faInstagram)

app.use(createPinia())
app.use(router)
app.use(Particle)
app.mount('#app')
app.component('fa', FontAwesomeIcon)
