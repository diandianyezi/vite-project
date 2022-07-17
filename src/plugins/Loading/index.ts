import { App, createVNode, render } from "vue";
import Loading from '../Loading/index.vue'

export default {
    install(app:App) {
        const vnode = createVNode(Loading)
        render(vnode, document.body)
        app.config.globalProperties.$loading = {
            show: vnode.component?.exposed?.show,
            hide: vnode.component?.exposed?.hide,
        }
    }
}