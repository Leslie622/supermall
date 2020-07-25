import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"

import FastClick from "fastclick"
import VueLazyload from "vue-lazyload"


//引入自定义的toast插件
import toast from "components/common/toast"

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

//安装自定义的toast插件
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

//使用懒加载插件
Vue.use(VueLazyload,{
  loading:require("./assets/img/common/placeholder.png")
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
