<template>
  <div class="check-button" :class="{check:isChecked}" >
    <img src="~assets/img/cart/tick.svg"  />
  </div>
</template>
 
<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  methods: {}
};
</script>

<style scoped>
.check-button {
  display: flex;
  width: 40%;
  padding: 3px;
  border: 1px solid rgb(214, 200, 200);
  border-radius: 3px;
  transition: all .15s;
}

.check-button img {
  width: 100%;
}

.check {
  border-color: rgb(255, 129, 152);
  background-color: rgb(255, 129, 152);
}
</style>