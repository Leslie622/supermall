<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
    <button @click="btnClick">clickme</button>
    <span @click="btnClick">点我</span>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
            <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
    </ul>
  </div>
</template>
 
<script>
import BScroll from "better-scroll";

export default {
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // click:true
    });
  },
  methods: {
    btnClick(){
      console.log("a");
    }
  },
};
</script>

<style scoped>
.wrapper{
  height: 300px;
  background-color: red;
  overflow: hidden;
}
</style>