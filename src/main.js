import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem, Button, Tab, Tabs, Grid, GridItem} from 'vant'


Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Grid)
Vue.use(GridItem)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
