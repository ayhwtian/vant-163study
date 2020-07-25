<template>
  <div id="app">
    <swipe></swipe>
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>
import swipe from "@/components/swipe.vue";
export default {
  name: "app",
  components: {
    swipe,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss">
</style>
