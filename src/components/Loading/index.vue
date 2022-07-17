<template>
  <div v-if="isShow" class="loading">
    <div class="loading-content">Loading...</div>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

const isShow = ref(false)

const show = () => {
    isShow.value = true
}

const hide = () => {
    isShow.value = false
}

defineExpose({
  isShow,
  show,
  hide
})

</script>
<style lang='less' scoped>
.loading {
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,.8);
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
        font-size: 30px;
        color: #fff;
    }
}
</style>