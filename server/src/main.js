import Vue from 'vue'
import App from '@/layouts/App.vue'

Vue.config.productionTip = false

//引入基础样式
import './assets/css/base.css'; // ~~ src ='...'

//引入字体比例校验 js   
// import '@/assets/js/font.js' // ~~ src='..'
require('@/assets/js/font.js') // ~~ src='..'


//引入路由对象
import router from './plugins/router.js'

//引入axios插件的配置
import './plugins/axios'

//引入模板变量配置
import './config/template'

//注册全局过滤器
import filters from './filters'
/* for(var key in filters){
  Vue.filter(key,filters[key])
} */
Object.keys(filters).map(key=>Vue.filter(key,filters[key]))


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
