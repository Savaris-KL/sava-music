<template>
  <div
    class="ele-top-bar ele-border-box ele-pl-50 ele-pt-20 ele-pb-20 ele-pr-40 ele-fl ele-ali-center ele-jus-between"
  >
    <SearchBar />
    <TopNavigation />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import SearchBar from './SearchBar.vue'
import TopNavigation from './TopNavigation.vue'

export default defineComponent({
  name: 'TopBar',
  components: {
    SearchBar,
    TopNavigation
  }
})
</script>

<style lang="stylus" scoped>
.ele-top-bar
  height 11.1111vh
  background-color transparent
  box-sizing border-box
</style>
