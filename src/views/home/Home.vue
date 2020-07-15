<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper />
  </div>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";
import Swiper from "components/content/bannerLoop/Swiper";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper
  },
  data() {
    return {

    };
  },
  methods: {}
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>