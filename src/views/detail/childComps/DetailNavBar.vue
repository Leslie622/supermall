<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <i class="iconfont icon-zuojiantou"></i>
    </div>
    <div slot="center" class="titles">
      <div
        v-for="(item,index) in titles"
        class="titleItem"
        :class="{active:index === currentIndex}"
        @click="titleClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>
 
<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.titles {
  display: flex;
  justify-content: space-evenly;

  font-size: 15px;
}

.active {
  color: hotpink;
}

.back {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgb(255, 247, 247);
}
.back i {
  font-size: 25px;
}
</style>