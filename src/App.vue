<template>
  <div id="app">
    <swipe></swipe>
    
  </div>
</template>

<script>
import swipe from "@/views/home/swipe.vue";
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
