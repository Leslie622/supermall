<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabShow"
    />
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

      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2"></tab-control>

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
import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin";

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
      backTopIsShow: false,
      tabOffsetTop: 0,
      isTabShow: false,
      saveY: 0
    };
  },
  mixins: [itemListenerMixin],
  created() {
    // 1.请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    //监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 200);
    this.$bus.$on("homeItemImageLoad", () => {
      refresh();
    });
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.backTopIsShow = position.y < -1000;
      //决定tabControl是否吸顶
      this.isTabShow = position.y < -this.tabOffsetTop - 44;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    }
  },
  updated() {
    this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  background-color: white;
}

.tab-control {
  position: relative;
  z-index: 100;
}
</style>