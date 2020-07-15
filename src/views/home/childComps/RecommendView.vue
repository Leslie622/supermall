<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend {
  display: flex;
  margin-top: 15px;
  width: 100%;
  padding-bottom: 15px;
  border-bottom: 10px solid rgb(246,246,246 );
}

.recommend-item {
  display: flex;
  flex: 1;
  text-align: center;
}

.recommend-item img {
  margin-bottom: 5px;
  width: 80%;
}
</style>