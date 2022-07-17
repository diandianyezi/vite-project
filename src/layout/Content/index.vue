<template>
    <div class="content">
        <div>
            pinia: {{Test.current}}--- {{Test.name}}
            <button @click="change"></button>
        </div>
        <div class="content-item" v-for="item in 100" :key="item">
        {{
            item
        }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ComponentInternalInstance, getCurrentInstance } from 'vue';
import { useTestStore } from '../../store/index'

const { appContext } = getCurrentInstance() as ComponentInternalInstance

appContext.config.globalProperties.$loading.show()

const Test = useTestStore()

const change = () => {
    // 第一种： 直接修改，vuex中是不允许的
    // Test.current++;
    // 第二种： $patch 修改
    // Test.$patch({
    //     current: 888,
    //     name: 'patch修改'
    // })
    // 第三种  函数式写法
    // Test.$patch((state) => {
    //     state.current= 888;
    //     state.name= 'patch修改'
    // })
    // 第四种 直接修改整个state
    // Test.$state = {
    //     current: 400,
    //     name: 'www'
    // }
    // 第五种 使用actions 修改
    Test.setCurrent(555)
}

setTimeout(() => {
    appContext.config.globalProperties.$loading.hide()
}, 5000)

</script>

<style lang="less" scoped>
.content {
    flex: 1;
    margin: 20px;
    border: 1px solid #e8e8e8;
    overflow: scroll;
    &-item {
        padding: 20px;
        border-bottom: 1px solid #ccc;
    }
}

</style>