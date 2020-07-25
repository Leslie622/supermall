<template>
  <div class="cartButtonBar">
    <div class="selectAll">
      <checked-button :is-checked="isSelectAll" class="checkButton" @click.native="checkedClick" />
      <span>全选</span>
    </div>
    <div class="checkOut">
      <div class="totalPrice">
        <span>合计：</span>
        <span>￥{{totalPrice}}</span>
      </div>
      <span class="checkOutText">结算({{checkLength}})</span>
    </div>
  </div>
</template>
 
<script>
import CheckedButton from "components/content/checkButton/CheckButton";

import { mapGetters } from "vuex";

export default {
  components: {
    CheckedButton,
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      // return !this.cartList.filter(item => !item.checked).length;
      if (this.cartList.length === 0) return false;
      return !this.cartList.find((item) => !item.checked);
    },
  },
  methods: {
    checkedClick() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.checked = false));
      } else {
        this.cartList.forEach((item) => (item.checked = true));
      }
    },
  },
};
</script>

<style scoped>
.cartButtonBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8%;

  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  border-top: 1px solid rgb(247, 242, 242);
  background-color: white;
}

.selectAll {
  display: flex;
  align-items: center;
  width: 30%;
}
.selectAll span {
  font-size: 14px;
}
.checkButton {
  width: 15%;
  margin: 0 10px;
}
.checkOut {
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 55%;
  height: 100%;
}
.totalPrice {
  display: flex;
  align-items: center;
}
.totalPrice span:nth-child(1) {
  font-size: 14px;
  font-weight: 600;
}
.totalPrice span:nth-child(2) {
  color: rgb(243, 124, 26);
  font-size: 16px;
  font-weight: 600;
}
.checkOutText {
  display: flex;
  align-items: center;
  padding: 4% 5%;
  height: 65%;
  color: white;
  background-color: var(--color-tint);
  border-radius: 12px;
  margin-right: 10px;
}
</style>