<template>
  <div class="cart-list">
    <scroll class="wrapper" ref="scroll">
      <cart-list-item v-for="(item,index) in cartList" :product="item" :key="index" />
    </scroll>
  </div>
</template>
 
<script>
import Scroll from "components/common/scroll/Scroll";
import CartListItem from "./CartListItem";

import { mapGetters } from "vuex";

export default {
  props: {
    cartBottonBarHeight: {
      type: Number,
      default: 0
    }
  },
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.wrapper {
  height: calc(94vh - 105px);
}
</style>