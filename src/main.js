import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store/index"

//引入自定义的toast插件
import toast from "components/common/toast"

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()

//安装自定义的toast插件
Vue.use(toast)

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
