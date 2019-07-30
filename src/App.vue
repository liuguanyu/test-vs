<template>
  <div id="app">
    <h1>Hello App!</h1>
    <div style="position:fixed;top: 50px;">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <div style="background:#ccc;cursor:pointer;" @click="to('foo')">去foo</div>
      <div style="margin:5px;background:#ccc;cursor:pointer;" @click="to('bar')">去bar</div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <vue-page-stack>
      <router-view></router-view>
    </vue-page-stack>
  </div>
</template>
 
<script>
export default {
  name: "App",
  data() {
    return {}
  },
  components: {},
  created() {},
  methods: {
    to(name) {
      this.$router.push("/" + name)
    }
  }
}
</script>