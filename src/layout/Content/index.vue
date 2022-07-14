<template>
    <div class="content">
        <div class="content-item" v-for="item in 100" :key="item">
        {{
            item
        }}
        </div>
    </div>
</template>

<script lang="ts" setup>
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