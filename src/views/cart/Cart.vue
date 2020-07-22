<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-button-bar ref="cartBottonBar" />
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartButtonBar from "./childComps/CartBottonBar";

import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    CartList,
    CartButtonBar
  },
  computed: {
    ...mapGetters(["cartCount"])
  }
};
</script>

<style scoped>
.nav-bar {
  color: white;
  background-color: var(--color-tint);
}
</style>