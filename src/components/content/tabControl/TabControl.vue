<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      class="tabControlItem"
      :class="{active:index === currentIndxe}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndxe: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndxe = index;
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: white;
}

.tabControlItem {
  flex: 1;
}

.tabControlItem span {
  padding: 4px;
}
.active {
  color: hotpink;
}

.active span {
  transition: all 0.15s;
  border-bottom: 3px solid hotpink;
}
</style>