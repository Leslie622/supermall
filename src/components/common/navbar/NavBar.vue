<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
  .nav-bar{
    position: relative;
    z-index: 10;
    display:flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0px 1px 2px rgb(207, 204, 204,.3);
  }

  .left,.right{
    width: 50px;
  }

  .center{
    flex: 1;
  }
</style>