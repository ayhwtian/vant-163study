<template>
  <div id="app">
    <router-view />
    <div class="null-line"></div>
    <tabbar></tabbar>
  </div>
</template>

<script>
import tabbar from "@/components/tabbar";

export default {
  name: "app",
  components: {
    tabbar,
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
body {
  background-color: #f3f4f8;
  @media only screen and (min-width: 768px) {
    .null-line {
      height: 8rem;
    }
  }
  @media only screen and (max-width: 768px) {
    .null-line {
      height: 3rem;
    }
  }
}
</style>
