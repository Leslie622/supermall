<template>
  <div id="detail">
    <detail-nav-bar class="detailnavbar"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :param-info="paramInfo"></detail-param-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <detail-recommend-info :recommend-list="recommendList"></detail-recommend-info>
      <goods-list :goods="recommend" />
    </scroll>
  </div>
</template>
 
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
import { debounce } from "common/utils";
import { itemListenerMixin } from "common/mixin";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    GoodsList
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      recommend: []
    };
  },
  mixins: [itemListenerMixin],
  created() {
    //$route.params获取路由传过来的数据
    this.iid = this.$route.params.iid;
    // 请求数据
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //获取商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0];
      }
    });

    getRecommend().then(res => {
      this.recommend = res.data.list;
    });
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
    }
  }
  // mounted() {
  //   const refresh = debounce(this.$refs.scroll.refresh, 200);
  //   this.$bus.$on("detailItemImageLoad", () => {
  //     refresh();
  //   });
  // }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 100;
  background-color: white;
}
.detailnavbar {
  background-color: white;
  z-index: 200;
}
.content {
  height: calc(100vh - 44px);
}
</style>