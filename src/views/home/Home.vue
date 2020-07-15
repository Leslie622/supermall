<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <swiper :banners="banners" />

    <recommend-view :recommends="recommends" />

    <feature-view></feature-view>
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/content/bannerLoop/Swiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView"
import { getHomeMultidata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: null,
      recommends: null
    };
  },
  methods: {},
  created() {
    // 1.请求多个数据
    getHomeMultidata().then(res => {
      //存储请求过来的数据
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style scoped>
.home-nav {
  position: fixed;
  z-index: 9999;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--color-tint);
  color: white;
}
</style>