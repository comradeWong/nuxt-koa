import Vue from 'vue'
import Elment from 'element-ui/lib/element-ui.common'
import local from 'element-ui/lib/locale/lang/zh-CN'

export default () => {
  Vue.use(Elment, { local })
}
