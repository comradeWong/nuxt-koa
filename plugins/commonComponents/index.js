import Logo from '@/components/Logo'
import Vue from 'vue'

const install = Vue => {
  Vue.component('MyLogo', Logo)
}
Vue.use(install)
