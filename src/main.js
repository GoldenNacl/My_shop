import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 导入字体图标
import '@/assets/fonts/iconfont.css'
// 导入element-ui组件及css'
import '@/plugins/element.js'
// 导入全局样式表
import '@/assets/css/global.css'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://api.dkstudy.com:8000/api/private/v1/'
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
