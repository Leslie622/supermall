<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="{threshold:-40}"
      @pullingUp="loadMore"
    >
      <swiper :banners="banners" />

      <recommend-view :recommends="recommends" />

      <feature-view></feature-view>

      <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>

      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>

    <back-top @click.native="backTop" v-show="backTopIsShow" />
  </div>
</template>
 
<script>
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/content/bannerLoop/Swiper";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    RecommendView,
    FeatureView,
    NavBar,
    Swiper,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: null,
      recommends: null,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      backTopIsShow: false
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
    /*
     *  网络请求相关方法
     */
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
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    /*
     *  事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backTop() {
      console.log("a");
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.backTopIsShow = position.y < -1000;
    },
    loadMore() {
      console.log("上拉加载更多");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.scroll.refresh();
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

.content {
  height: calc(100vh - 93px);
}
</style>