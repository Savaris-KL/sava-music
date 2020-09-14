<template>
  <div class="ele-scroll-view ele-scroll-no-bar ele-pt-30">
    <Logo />
    <div class="ele-mt-10">
      <TreeList :title="musicPlanTree.title" :items="musicPlanTree.items" />
    </div>
    <div class="ele-mt-30">
      <TreeList :title="extendSongsTree.title" :items="extendSongsTree.items" />
    </div>
  </div>
</template>

<script>
import { useAssets } from '@/use/useAssets'
import { defineComponent } from 'vue'
import Logo from './Logo.vue'
import TreeList from './TreeList.vue'

export default defineComponent({
  name: 'LeftSider',
  components: {
    Logo,
    TreeList
  },
  setup () {
    const assets = useAssets()

    // id必须设置，视觉交互的效果需要使用到该序列值作为唯一索引
    const musicPlanTree = {
      title: '音乐计划',
      items: [
        {
          id: 0,
          desc: '我的歌单',
          icon: assets.iconPlaylist,
          color: 'rgba(255,255,255,0.7)'
          // event: () => {}
        },
        {
          id: 1,
          desc: '我的轮播',
          icon: assets.iconScroll,
          color: 'rgba(255,255,255,0.7)'
          // event: () => {}
        },
        {
          id: 2,
          desc: '我的插播',
          icon: assets.iconCutin,
          color: 'rgba(255,255,255,0.7)'
          // event: () => {}
        },
        {
          id: 3,
          desc: '我的计划',
          icon: assets.iconSchedule,
          color: 'rgba(255,255,255,0.7)'
          // event: () => {}
        }
      ]
    }

    const extendSongsTree = {
      title: '音乐曲库',
      items: [
        {
          id: 4,
          desc: '曲库大厅',
          icon: assets.iconSongsLib,
          color: 'rgba(255,255,255,0.7)'
          // event: () => {}
        },
        {
          id: 5,
          desc: '第三方获取',
          icon: assets.iconThirdGain,
          color: 'rgba(255,255,255,0.7)'
          // event: () => {}
        },
        {
          id: 6,
          desc: '本地获取',
          icon: assets.iconLocalGain,
          color: 'rgba(255,255,255,0.7)'
          // event: () => {}
        }
      ]
    }
    return { musicPlanTree, extendSongsTree }
  }
})
</script>
