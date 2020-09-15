<template>
  <div class="ele-home ele-fl ele-drag">
    <div class="ele-left">
      <LeftSider />
    </div>
    <div class="ele-right">
      <TopBar />
      <Content />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LeftSider from '@/components/LeftSider/Index.vue'
import TopBar from '@/components/TopBar/Index.vue'
import Content from '@/components/Content/Index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    LeftSider,
    TopBar,
    Content
  }
})
</script>

<style lang="stylus" scoped>
.ele-left
  width 20.6666%
  background-color rgba(0,0,0,0.9)

.ele-right
  flex 1
  background-color rgba(0,0,0,0.88)
</style>
