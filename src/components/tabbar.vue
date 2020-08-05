<template>
  <div id="tabbar" >
    <van-tabbar 
    v-model="active" 
    route 
    @change="onChange" 
    safe-area-inset-bottom>
      <van-tabbar-item name="Home" icon="wap-home-o" replace to="/home">首页</van-tabbar-item>
      <van-tabbar-item name="MyStudy" icon="cluster-o" replace to="/mystudy">我的学习</van-tabbar-item>
      <van-tabbar-item name="My" icon="manager-o" replace to="/my">账号</van-tabbar-item>
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
      active: 'Home',
    };
  },
  created() {
    // 刷新页面保持当前页
    this.active = this.$route.name
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