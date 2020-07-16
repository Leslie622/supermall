<template>
  <div class="goods">
     <goods-list-item v-for="(item,key) in goods" :goods-item="item" :key="key"/>
  </div>
</template>
 
<script>
import GoodsListItem from "./GoodsListItem"

export default {
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    padding: 15px 10px 0 10px;
    justify-content: space-between;
  }
</style>