import Vue from 'vue'
import App from './App.vue'
import './assets/css/global.styl'
import './assets/css/theme.styl'
import store from './store'
import './utils/rem'
import router from './router'

// 过滤器
import { homeFilter } from './filters/index'


for (var key in homeFilter) {
    Vue.filter(key, homeFilter[key])
}

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')