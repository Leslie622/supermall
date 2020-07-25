<template>
  <div class="goodsListItem" @click="itemClick">
    <img v-lazy="showImage" @load="imageLoad" />
    <div class="itemText">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}元</span>
      <span class="collect">收藏数:{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
  methods: {
    imageLoad() {
      if (this.$route.path.indexOf('/home') != -1) {
        this.$bus.$emit("homeItemImageLoad");
      } else if (this.$route.path.indexOf('/detail') != -1) {
        this.$bus.$emit("detailItemImageLoad");
      }
    },
    itemClick() {
      this.$router.push("/detail" + this.goodsItem.iid);
    }
  }
};
</script>

<style scoped>
.goodsListItem {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
  width: 49%;
  background-color: white;
  border: 1px solid rgb(233, 226, 226);
  border-radius: 10px;
}

.goodsListItem img {
  margin-bottom: 10px;
  width: 100%;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
}

.goodsListItem .itemText {
  padding-bottom: 5px;
  width: 90%;
  font-size: 12px;
}

.goodsListItem .itemText p {
  margin-bottom: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.price {
  color: tomato;
  margin: 20px;
  font-size: 14px;
}
</style>