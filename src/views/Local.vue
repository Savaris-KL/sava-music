<template>
  <div class="ele-pt-10 ele-pl-50">
    <h1 class="ele-no-pmo ele-mb-15">我的歌单</h1>
    <Playlist />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Playlist from '@/components/Content/Playlist.vue'

export default defineComponent({
  name: 'Content',
  components: {
    Playlist
  }
})
</script>
