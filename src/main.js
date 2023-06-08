import { createApp } from 'vue'
import 'boxicons'

// VueX
import store from './vuex/store'

// CSS
import './assets/style/normalize.css'

import App from './App.vue'


createApp(App).use(store).mount('#app')
