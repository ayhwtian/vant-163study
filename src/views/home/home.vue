<template>
  <div id="home">
    <div id="home" v-show="selected">
      <swipe></swipe>
      <navbar></navbar>
      <courses :title="title1"></courses>
      <courses :title="title2"></courses>
      <courses :title="title3"></courses>
      <courses :title="title4"></courses>
    </div>
  </div>
</template>

<script>
import swipe from "@/views/home/child/swipe.vue";
import navbar from "@/views/home/child/navbar";
import courses from "@/views/home/child/courses";

export default {
  name: "home",
  components: {
    swipe,
    navbar,
    courses,
    tabbar,
  },
  data() {
    return {
      active: 0,
      title1: "程序开发精品课",
      title2: "IT技能提升课",
      title3: "职场必备",
      title4: "学会说话不吃亏",
      selected: 1,
    };
  },
  methods: {
    onChange() {
      this.selected = index;
    },
  },
};
</script>

<style lang="scss" scoped>
#courses {
  margin-top: 20px;
}
#tabbar {
  margin: 20px;
}
</style>