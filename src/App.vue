<template>
  <div id="app">
    <router-view />
    <div class="null-line"></div>
  </div>
</template>

<script>
import Layout from '@/layout/Layout'

export default {
  name: "app",
  components: {
    Layout
  },
  data() {
    return {};
  },
  created() {},
  computed: {

  },
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
