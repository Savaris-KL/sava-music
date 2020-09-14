<template>
  <div class="ele-fl ele-fl-wrap ele-scroll-view ele-pt-10 ele-pb-200">
    <div
      v-for="(item, index) in 100"
      :key="index"
      class="ele-plcard ele-mr-20 ele-mb-20 ele-fl-col"
    >
      <Card
        src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2845125918,2221347225&fm=26&gp=0.jpg"
      />
      <h3 class="ele-no-pmo ele-size-12 ele-mt-10">
        抖音超热中文歌，不好听算我输
      </h3>
      <span class="ele-size-12 ele-color-white-5 ele-mt-5">腼腆酱</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Card from '@/components/Card'

export default defineComponent({
  components: {
    Card
  }
})
</script>

<style lang="stylus" scoped>
.ele-plcard
    width 160px
</style>
