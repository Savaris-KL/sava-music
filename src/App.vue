<template>
  <Home />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Home from '@/views/Home.vue'

export default defineComponent({
  components: {
    Home
  }
})
</script>

<style lang="stylus">
@font-face {
  font-family: Meslo;
  src: url('~@/assets/fonts/Meslo LG S Bold for Powerline.ttf');
}

body
  margin 0
  padding 0
  outline 0
  width 100vw
  height 100vh
  overflow hidden
  @extend .ele-container
  @extend .ele-color-white-10
#app
  font-family Meslo
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  @extend .ele-container
</style>
