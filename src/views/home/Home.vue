<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <swiper :banners="banners" />

    <recommend-view :recommends="recommends" />

    <feature-view></feature-view>

    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>

    <goods-list :goods="goods.pop.list"></goods-list>

    <ul>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>
 
<script>
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/content/bannerLoop/Swiper";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    RecommendView,
    FeatureView,
    NavBar,
    Swiper,
    TabControl,
    GoodsList
  },
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        //存储请求过来的数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    }
  }
};
</script>

<style scoped>
.home-nav {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--color-tint);
  color: white;
}

.tab-control {
  position: sticky;
  top: 44px;
}
</style>