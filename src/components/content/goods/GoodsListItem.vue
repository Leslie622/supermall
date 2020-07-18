<template>
  <div class="goodsListItem">
    <a :href="goodsItem.clientUrl">
      <img :src="goodsItem.show.img" @load="imageLoad"/>
      <div class="itemText">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}元</span>
        <span class="collect">收藏数:{{goodsItem.cfav}}</span>
      </div>
    </a>
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
  methods: {
    imageLoad(){
      this.$bus.$emit("itemImageLoad")
    }
  },
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

.goodsListItem a {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
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