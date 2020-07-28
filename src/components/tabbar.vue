<template>
  <div id="tabbar">
    <van-tabbar v-model="active" route @change="onChange">
      <van-tabbar-item name="home" icon="wap-home-o" replace to="/home">首页</van-tabbar-item></van-tabbar-item></van-tabbar-item>
      <van-tabbar-item name="myStudy" icon="cluster-o" replace to="/mystudy">我的学习</van-tabbar-item>
      <van-tabbar-item name="my" icon="manager-o" replace to="/my">账号</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Notify } from 'vant'

Vue.use(Notify)

export default {
  name: "tabbar",
  data() {
    return {
      active: 'home',
    };
  },
  created() {
    // 初始化页面的时候默认打开home，因为active初始化的时候默认是home
    this.$router.push("/home")
  },
  methods: {
    onChange(index) {
      // Notify({ type: 'primary', message: index });
      // this.$emit("onclick",index);
    }
  }
};
</script>

<style lang="scss" scoped>
#tabbar {
  ::v-deep .van-tabbar {
    .van-tabbar-item__icon {
      .van-icon {
        font-size: 50px;
      }
    }
  }
}
</style>