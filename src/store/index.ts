import { defineStore } from 'pinia'

export const useTestStore = defineStore('useTestStore', {
    state: () => ({ current: 1, name: '小满'}),
    getters: {

    },
    actions: {
        setCurrent(v: number) { // 不能用箭头函数 this回指向错误
            this.current = v
        }
    }
}) 