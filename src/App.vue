<template>
  <div id="app">
    <swipe></swipe>
    <navbar></navbar>
  </div>
</template>

<script>
import swipe from "@/views/home/swipe.vue";
import navbar from "@/views/home/navbar";

export default {
  name: "app",
  components: {
    swipe,
    navbar,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss">
body {
  background-color: #f3f4f8;
}
</style>
