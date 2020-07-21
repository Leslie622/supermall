<template>
  <div class="cartButtonBar">
    <div class="selectAll">
      <checked-button class="checkButton" />
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

export default {
  components: {
    CheckedButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => {
        return item.checked;
      }).length;
    }
  }
};
</script>

<style scoped>
.cartButtonBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6%;

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
  display: block;
  padding: 6px 18px;
  color: white;
  background-color: var(--color-tint);
  border-radius: 14px;
  margin-right: 10px;
}
</style>