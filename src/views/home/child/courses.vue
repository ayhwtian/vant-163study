<template>
  <div id="courses">
    <div class="title">
      <span>{{title}}</span>
    </div>
    <div class="c-c">
      <div class="c" v-for="(value, index) in list" :key="index">
        <van-image class="img" :src="value.imageUrl" />
        <div class="courses-name">
          <span>{{value.title}}</span>
        </div>
        <div class="sale-price">
          <span>￥{{value.salePrice}}</span>
        </div>
        <div class="price">
          <span>￥{{value.price}}</span>1
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCourses } from "@/network/home";

export default {
  name: "courses",
  data() {
    return {
      list: [],
    };
  },
  props: {
    title: "",
  },
  created() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      getCourses().then((res) => {
        this.list = [...res.courses];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#courses {
  .title {
    background-color: #fff;
    padding: 25px;
    font-size: 40px;
    font-weight: bold;
  }
  .c-c {
    background-color: #fff;
    width:100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .c {
      flex: 1;
      width: calc((100% - 100px)/2);
      min-width: calc((100% - 100px)/2);
      max-width: calc((100% - 100px)/2);
      .img {
        width: 100%;
      }
      .courses-name {
      }
      .sale-price {
        float: left;
        padding: 5px;
        color:#dc4512;
        font-size: 32px;
      }
      .price {
        padding: 10px 0 0 5px;
        text-decoration: line-through;
        color: #82837f;
        font-size: 28px;
      }
    }
  }
}
</style>