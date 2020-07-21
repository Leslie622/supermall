<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <cart-list></cart-list>
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";

import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    CartList
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>

<style scoped>
.cart{
  height: 100vh;
}
.nav-bar {
  color: white;
  background-color: var(--color-tint);
}
</style>