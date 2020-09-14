<template>
  <img
    :class="[`ele-shape-${shape}`]"
    :width="size"
    :height="size"
    :src="src"
    :alt="alt"
  />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    shape: {
      validator: val => ['circle', 'fillet', 'square'].includes(val),
      default: 'circle'
    },
    src: String,
    size: {
      type: Number,
      default: 14
    },
    alt: String
  }
})
</script>

<style lang="stylus" scoped>
.ele-shape
  &-circle
    border-radius 50%
  &-fillet
    border-radius 10%
  &-square
    border-radius none
</style>
