import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Avatar from '@/components/Avatar.vue'
import Image from '@/components/Image.vue'

export function initComponents (vue: App) {
  vue.component('SvgIcon', SvgIcon)
  vue.component('Avatar', Avatar)
  vue.component('Image', Image)
}
