import { ref } from 'vue'

// 设置全局变量，因为一个页面可以存在多个TreeList
const hoverIndex = ref(0)
const clickIndex = ref(0)
const click = (index: any, cb: Function) => {
  clickIndex.value = index
  cb && cb()
}
const mouseover = (index: any) => (hoverIndex.value = index)
const mouseleave = () => (hoverIndex.value = ~0)

export function useTreeMouse () {
  return { hoverIndex, clickIndex, click, mouseover, mouseleave }
}
