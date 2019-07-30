import Vue from 'vue'
import App from './App.vue'
// import DemoVue from './Demo.vue'
// import VuePageStack from 'vue-page-stack'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Bar from './components/bar.vue'
import Foo from './components/foo.vue'
  
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
  // {
  //   path: '/tab',
  //   component: DemoVue,
  //   props: ({ query }) => {
  //     return { type: query.index || '0' }
  //   }
  // }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')