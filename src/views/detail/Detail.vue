<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>
 
<script>
import DetailNavBar from "./childComps/DetailNavBar";

export default {
  components: {
    DetailNavBar
  },
  data() {
    return {
      iid: null
    };
  },
  created() {
    //$route.params获取路由传过来的数据
    this.iid = this.$route.params.iid;
  }
};
</script>

<style scoped>
</style>