<template>
  <div
    @mouseover="wrapperMouseover"
    @mouseleave="wrapperMouseleave"
    class="ele-plcard"
    :class="[
      { 'ele-plcard-hover': wrapperHover },
      { 'ele-plcard-leave': !wrapperHover }
    ]"
  >
    <div v-show="wrapperHover" class="ele-plcard-mask ele-z-top ele-center">
      <span @mousemove="iconMouseover" @mouseleave="iconMouseleave">
        <SvgIcon
          :content="assets.iconPlay"
          :size="48"
          :color="iconHover ? 'rgba(0,255,204,0.8)' : 'rgba(255,255,255,1)'"
        />
      </span>
    </div>
    <Image :src="src" :radius="10" :width="width" :height="height" />
  </div>
</template>

<script>
import { useAssets } from '@/use/useAssets'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'PlaylistCard',
  props: {
    src: String,
    width: {
      type: Number,
      default: 160
    },
    height: {
      type: Number,
      default: 160
    }
  },
  setup () {
    const wrapperHover = ref(false)
    const iconHover = ref(false)
    const wrapperMouseover = () => (wrapperHover.value = true)
    const wrapperMouseleave = () => (wrapperHover.value = false)
    const iconMouseover = () => (iconHover.value = true)
    const iconMouseleave = () => (iconHover.value = false)
    const assets = useAssets()
    return {
      wrapperHover,
      wrapperMouseover,
      wrapperMouseleave,
      iconHover,
      iconMouseover,
      iconMouseleave,
      assets
    }
  }
})
</script>

<style lang="stylus" scoped>
.ele-plcard
    display inline-block
    position relative
    &-mask
        position absolute
        top 0
        left 0
        right 0
        bottom 0
        background-color rgba(0,0,0,0.7)
        border-radius 10px
    &-hover
        transition all .3s
        transform translateY(-10px)
    &-leave
        transition all .3s
        transform translateY(0px)
</style>
