<template>
  <div
    class="ele-image-wrapped"
    :style="{
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: `${radius}px`
    }"
  >
    <img
      class="ele-image"
      :class="[
        { 'ele-image-fill-hor': horizon },
        { 'ele-image-fill-ver': !horizon }
      ]"
      @load="load"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Image',
  props: {
    width: {
      type: Number,
      default: 150
    },
    height: {
      type: Number,
      default: 150
    },
    src: String,
    radius: Number,
    alt: String
  },
  setup () {
    const horizon = ref(false)
    const load = evt => {
      const { width, height } = evt.currentTarget
      horizon.value = width < height
    }
    return { horizon, load }
  }
})
</script>

<style lang="stylus" scoped>
.ele-image
    position relative
    top 50%
    left 50%
    transform translate(-50%, -50%)
    &-wrapped
        overflow hidden
        posiion relative
    &-fill-hor
        width 100%
    &-fill-ver
        height 100%
</style>
