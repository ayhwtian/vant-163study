<template>
  <div id="my">
    <span>我是我的页面</span>
    <van-button @click='concel'>退出</van-button>
  </div>
</template>

<script>
export default {
  name: "my",
  components: {},
  data() {
    return {};
  },
  methods: {
    concel() {
      window.sessionStorage.clear('token')
      this.$router.push('/login')
    }
  }
};
</script>

<style scoped>
#my {
  width: 100%;
  height: 1600px;
  line-height: 500px;
  text-align: center;
  background-color: #74c010;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>