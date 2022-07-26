<template>
  <div class=''></div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue';

let width = ref(600)
let height = ref(400)
let canvas: any = null
let ctx: any = null
let snakeList = [[0,100], [10,100]]
let direction = 'right' // top | down | left | right // 当前方向
let elementWidth = 10
let speed = 10
let store = ref(0)
let status = ref('start') // unStart | start | pause ｜ over | success(通关) // 状态
let foodCoordinate: any = [
  ((Math.random() * width.value) / 10) | 0,
  ((Math.random() * height.value) / 10) | 0,
] // 食物坐标
let process: any = null // 定时器Id

// 绘制食物
function handleRenderFood() {
  ctx.clearRect(foodCoordinate[0], foodCoordinate[1], 10, 10)
  foodCoordinate = [(Math.random() * width.value) | 0, (Math.random() * height.value) | 0]
  ctx.fillStyle = '#eb2f96'
  ctx.fillRect(foodCoordinate[0], foodCoordinate[1], 10, 10)
}
function handleRenderSnake() {
  switch (direction) {
    case 'top':
      if (snakeList.slice(-1)[0][1] <= 0) {
        status.value = 'over'
        return
      }

      snakeList.push([
        snakeList[snakeList.length - 1][0],
        snakeList[snakeList.length - 1][1] - speed,
      ])
      handleUpdateVerify()
      break
    case 'down':
      if (snakeList.slice(-1)[0][1] >= height.value - 1) {
        status.value = 'over'
        return
      }

      snakeList.push([
        snakeList[snakeList.length - 1][0],
        snakeList[snakeList.length - 1][1] + speed,
      ])
      handleUpdateVerify()

      break
  }
}
function handleInit() {
  canvas = document.getElementById('canvas')

  if (canvas?.getContext) {
    ctx = canvas?.getContext('2d')

    canvas.addEventListener('mousemove', (e: MouseEvent) => {
      ctx.clearRect(10, height.value - 20, 120, 40)
      ctx.fillText(`当前鼠标位置：${e.offsetX}, ${e.offsetY}`, 10, height.value - 10)
    })

    document.addEventListener('keydown', e => {
      e.preventDefault()

      if (Direction[e.keyCode]) {
        direction = Direction[e.keyCode]
      }
    })

    process = setInterval(handleRenderSnake, 150)
    handleRenderFood()
    // window.requestAnimationFrame(handleRenderSnake)
  } else {
    alert('您的浏览器不支持 canvas')
  }
}

</script>
<style lang='less' scoped>
</style>

