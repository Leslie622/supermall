<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper/>
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import Swiper from "components/content/bannerLoop/Swiper"

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
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
      console.log(res);
      //存储请求过来的数据
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>