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
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: [Object, Boolean],
      default() {
        return true;
      }
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      click: true,
      momentumLimitTime: 200,
      pullUpLoad: this.pullUpLoad
    });
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
      this.scroll.finishPullUp();
    });
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
</style>