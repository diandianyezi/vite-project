import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Loading from './plugins/Loading'
import { createPinia } from 'pinia'
// import vueRouter from 'vue-router'

const store = createPinia()

const app = createApp(App)

declare module '@vue/runtime-core' {
    export interface ComponentCUstomProperties {
        $loading: {
            show: () => void,
            hide: () => void
        }
    }
}
app.use(Loading)

app.use(store)
// app.use(vueRouter)

app.mount('#app')
