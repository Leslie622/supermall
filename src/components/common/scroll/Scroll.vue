<template>
  <div class="wrapper" ref="wrapper">
     <div class="content">
       <slot></slot>
     </div>
  </div>
</template>
 
<script>
import BScroll from "better-scroll";

export default {
   data() {
    return {
      scroll:null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3,
      momentumLimitTime: 200,
      pullUpLoad: {
        threshold: -40
      }
    });
    this.scroll.on("scroll", position => {});
    this.scroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      this.scroll.finishPullUp();
    });
  },
  methods: {
    clickme() {
      console.log("a");
    }
  }
}
</script>

<style scoped>

</style>