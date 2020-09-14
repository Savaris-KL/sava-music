<template>
  <div class="ele-tree-list">
    <h3 class="ele-color-white-3 ele-size-12 ele-ml-30 ele-text-unselect">{{ title }}</h3>
    <ul class="ele-ul-pure ele-ml-30">
      <li
        class="ele-li ele-fl ele-ali-center ele-mt-20 ele-size-14"
        v-for="(item, index) in items"
        :key="index"
        @mouseover="mouseover(item.id)"
        @mouseleave="mouseleave"
        @click="click(item.id, item.event)"
      >
        <div
          :class="{ 'ele-item-active ele-z-bot': clickIndex === item.id }"
        ></div>
        <div
          :class="{ 'ele-item-hover ele-z-bot': hoverIndex === item.id }"
        ></div>
        <div class="ele-z-top ele-fl ele-ali-center">
          <SvgIcon :content="item.icon" :size="14" :color="item.color" />
          <span
            class="ele-size-14 ele-color-white-7 ele-ml-7 ele-text-unselect"
            :class="{
              'ele-color-white-10': [hoverIndex, clickIndex].includes(item.id)
            }"
            >{{ item.desc }}</span
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useTreeMouse } from '@/use/useTreeMouse'

interface TreeItems {
  id: number;
  desc: string;
  icon: string;
  color?: string;
  event?(): void;
}

export default defineComponent({
  name: 'TreeList',
  props: {
    title: String,
    items: Array as PropType<TreeItems[]>
  },
  setup () {
    const {
      mouseover,
      mouseleave,
      click,
      hoverIndex,
      clickIndex
    } = useTreeMouse()
    return { mouseover, mouseleave, click, hoverIndex, clickIndex }
  }
})
</script>

<style lang="stylus" scoped>
.ele-ul-pure
    list-style none
    padding 0

.ele-li
    position relative

.ele-item-active
    background-color rgba(0,255,204,0.8)
    position absolute
    height 30px
    width 88.8888%
    left -10px
    border-radius 5px

.ele-item-hover
    @extend .ele-item-active
    background-color rgba(255,255,255,0.1)
</style>
