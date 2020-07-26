<template>
  <div id="navbar">
    <van-grid square :border="false">
      <van-grid-item
        v-for="(value,index) in list"
        :key="index"
        :icon="value.imageUrl"
        :text="value.title"
      />
    </van-grid>
  </div>
</template>

<script>
import { getNavbar } from "@/network/home";

export default {
  name: "navbar",
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.getNavbar();
  },
  methods: {
    getNavbar() {
      getNavbar().then((res) => {
        this.list = [...res.navbar];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#navbar {
  ::v-deep .van-grid-item {
    .van-grid-item__content {
      .van-grid-item__text {
        font-size: 26px;
      }

      .van-icon {
        img {
          border-radius: 20%;
          widows: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>