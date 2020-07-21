<template>
  <div id="cartListItem">
    <div class="item-selector">
      <check-button :is-checked="product.checked" @click.native="checkClick"></check-button>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="info-bottom">
        <div class="item-price">¥ {{product.price}}</div>
        <div class="item-count">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>
 
<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
  components: {
    CheckButton
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkClick(){
      this.product.checked = !this.product.checked
    }
  },
};
</script>

<style scoped>
#cartListItem {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 5px;
  margin: 6px;
  height: 140px;

  border-radius: 10px;
  border: 1px solid rgb(235, 228, 228);
}

.item-selector {
  flex: 1.5;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 120px;
  height: 120px;
  font-size: 0;
  border-radius: 4px;
  background-color: pink;
}

.item-img img {
  width: 100%;
}

.item-info {
  flex: 6;
  display: flex;
  flex-wrap: wrap;
  padding-left: 10px;
  min-width: 0;
  height: 130px;
}

.item-title,
.item-desc,
.info-bottom {
  margin-top: 8px;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.item-title {
  font-size: 17px;
  font-weight: 600;
  text-overflow: clip;
}

.item-desc {
  font-size: 14px;
}

.info-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.item-price {
  font-size: 18px;
  font-weight: 700;
  color: rgb(248, 73, 9);
}

.item-count {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 30px;
  height: 25px;
  border-radius: 7px;
  border: 1px solid rgb(241, 230, 230);
}
</style>