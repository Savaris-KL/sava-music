<template>
  <svg
    t="1599978170915"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="1298"
    :width="size"
    :height="size"
    @mouseover="mouseover"
    @mouseleave="mouseleave"
  >
    <template v-if="typeof content === 'string'">
      <!-- simple svg -->
      <path
        :d="content"
        p-id="1299"
        :fill="hover && focus ? hoverColor : color"
      ></path>
    </template>
    <template v-if="typeof content === 'object'">
      <!-- complex svg -->
      <path
        v-for="(item, index) in content"
        :key="index"
        :d="item.d"
        p-id="1299"
        :fill="hover && focus ? hoverColor : item.c"
      ></path>
    </template>
  </svg>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

interface SvgIconProps {
  d: string;
  c: string;
}

export default defineComponent({
  name: 'SvgIcon',
  props: {
    content: [String, Array],
    size: {
      type: Number,
      default: 14
    },
    color: String,
    hover: {
      type: Boolean,
      default: false
    },
    hoverColor: String
  },
  setup () {
    const focus = ref(false)
    const mouseover = () => (focus.value = true)
    const mouseleave = () => (focus.value = false)
    return { focus, mouseover, mouseleave }
  }
})
</script>
