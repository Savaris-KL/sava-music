<template>
  <div class="ele-logo ele-fl ele-ali-center ele-color-white-10 ele-ml-30">
    <img class="ele-text-unselect" :src="assets.logo" alt="" />
    <h3 class="ele-ml-10 ele-text-unselect ele-weight-400">SAVA音乐</h3>
  </div>
</template>

<script>
import { useAssets } from '@/use/useAssets'

export default {
  setup () {
    const assets = useAssets()
    return { assets }
  }
}
</script>

<style lang="stylus" scoped>
.ele-logo > img
    width 30px
    height 30px
</style>
