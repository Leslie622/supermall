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
  height: calc(100vh - 44px - 49px);
}

.cart-list {
  width: 100%;
  overflow: hidden;
}
</style>