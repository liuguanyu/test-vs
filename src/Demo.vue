<template>
  <div>
    <ul>
      <router-link to="/tab?index=0" tag="li">tttttttttttttttt</router-link>
      <router-link to="/tab?index=1" tag="li">tttttttttttttttt</router-link>
      <router-link to="/tab?index=2" tag="li">tttttttttttttttt</router-link>
    </ul>
    <div v-show="type === '0'">11111</div>
    <div v-show="type === '1'">22222</div>
    <div v-show="type === '2'">
      <div class="ulc">
        <ul class="ulul">
          <li>幻灯1</li>
          <li>幻灯2</li>
          <li>幻灯3</li>
          <li>幻灯4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type"]
}
</script>

<style>
.ulc {
  width: 150px;
  height: 100px;
  overflow: hidden;
}
.ulul {
  float: left;
  width: 600px;
  list-style: none;
  padding: 0;
  margin: 0;
}
.ulul li {
  width: 148px;
  height: 98px;
  margin: 0;
  padding: 0;
  border: 1px dashed #ccc;
  list-style: none;
}
</style>
