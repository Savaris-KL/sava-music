<template>
  <div class="ele-fl ele-ali-center">
    <div class="ele-user ele-center">
      <Avatar :src="avatar" :size="24" />
      <div class="ele-ml-7"></div>
      <span class="ele-size-12 ele-color-white-10">c.c</span>
      <div class="ele-mr-7"></div>
      <SvgIcon :content="assets.iconVip" :size="24" />
    </div>
    <div class="ele-actions ele-center ele-ml-10">
      <SvgIcon
        :content="assets.iconArrowdown"
        :size="16"
        color="rgba(255,255,255,0.4)"
        :hover="true"
        hoverColor="rgba(0,255,204,0.8)"
      />
      <div class="ele-ml-7"></div>
      <SvgIcon
        :content="assets.iconShrink"
        :size="14"
        color="rgba(255,255,255,0.4)"
        :hover="true"
        hoverColor="rgba(0,255,204,0.8)"
      />
    </div>
  </div>
</template>

<script>
import { useAssets } from '@/use/useAssets'
import { defineComponent } from 'vue'

const avatar =
  'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1812993978,4158651947&fm=26&gp=0.jpg'

export default defineComponent({
  setup () {
    const assets = useAssets()
    return { avatar, assets }
  }
})
</script>
