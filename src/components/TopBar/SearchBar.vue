<template>
  <div class="ele-search-bar ele-ali-center ele-no-drag">
    <SvgIcon
      :content="assets.iconSearch"
      :size="14"
      color="rgba(255,255,255,0.5)"
    />
    <input
      class="ele-search-bar-input ele-ml-5 ele-color-white-8 ele-size-12"
      placeholder="搜索音乐"
      type="text"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useAssets } from '@/use/useAssets'

export default defineComponent({
  name: 'SearchBar',
  setup () {
    const assets = useAssets()
    return { assets }
  }
})
</script>

<style lang="stylus" scoped>
.ele-search-bar
  padding 7px 20px
  background-color rgba(255,255,255,0.1)
  display inline-flex
  border-radius 50px
  &-input
    background-color transparent
    border none
    outline  none
</style>
