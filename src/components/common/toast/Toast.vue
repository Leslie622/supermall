<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      message: "添加成功",
      isShow: false
    };
  },
  methods: {
    show(message, duration = 1000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  }
};
</script>

<style scoped>
.toast {
  position: fixed;
  z-index: 100;
  left: 50%;
  padding: 5px 30px;
  border-radius: 8px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  transform: translate(-50%, -50%);
  animation: move 0.3s forwards;
}

@keyframes move {
  0% {
    opacity: 0;
    top: 90%;
  }
  100% {
    opacity: 1;
    top: 80%;
  }
}
</style>