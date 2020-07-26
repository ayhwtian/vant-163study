<template>
  <div id="swipe">
    <van-swipe :autoplay="3000" >
      <van-swipe-item v-for="(image, index) in images" :key="index" @click="click(index)">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Lazyload, Toast} from 'vant'

import { getBanner } from '@/network/home'

Vue.use(Lazyload)
Vue.use(Toast)

export default {
  name: "swipe",
  data() {
    return {
      images: [
        // "https://dummyimage.com/'720x300'/f2d379&text=%E5%B9%BF%E5%91%8A",
        // "http://dummyimage.com/'720x300'/79cbf2&text=广告",
      ],
    };
  },
  created() {
    this.getBanner()
  },
  methods: {
    click(index) {
      Toast('当前索引：' + index)
    },
    /**
     * 网络请求方法
     * 获取banner数据
     */
    getBanner() {
      getBanner().then( res => {
        // console.log(...res.bannerList)
        const banner = []
        banner.push(...res.bannerList)
        // console.log(banner)
        for(var i=0; i<banner.length; i++){
          this.images.push(banner[i].img)
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
#swipe {
  ::v-deep .van-swipe {
    // margin-top: 30px;
    width:100%;
    img {
      width: 100%;
      height: 300px;
    }
  }
}
</style>