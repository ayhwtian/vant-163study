import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem, Button, Tab, Tabs, Grid, GridItem} from 'vant'
import { Cell, CellGroup, Image } from 'vant'
import { Tabbar, TabbarItem } from 'vant';
import { Form, Field } from 'vant'



Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Image)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Form)
Vue.use(Field)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

