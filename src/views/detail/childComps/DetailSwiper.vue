<template>
  <swiper ref="mySwiper" class="myswiper" :options="swiperOption">
    <swiper-slide v-for="(item,key) in topImages" :key="key">
      <img :src="item" />
    </swiper-slide>
    <div @click="slideto" class="myswiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

export default {
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        loop:true,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".myswiper-pagination",
          clickable: true,
          type: "custom",
          renderCustom: function(swiper, current, total) {
            var customPaginationHtml = " ";
            for (var i = 0; i < total; i++) {
              if (i == current - 1) {
                customPaginationHtml +=
                  "<span data-index='" +
                  i +
                  "' class='myswiper-pagination-customs myswiper-pagination-customs-active'></span>";
              } else {
                customPaginationHtml +=
                  "<span data-index=" +
                  i +
                  " class='myswiper-pagination-customs '></span>";
              }
            }
            return (
              '<div class="myswiperPag">' + customPaginationHtml + "</div>"
            );
          }
        }
      }
    };
  },
  computed: {
    //获取实例对象
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  methods: {
    slideto(event) {
      let cIndex = event.target.getAttribute("data-index");
      if (cIndex == null) {
        return;
      } else {
        this.swiper.slideToLoop(cIndex--, 1000, false);
      }
    }
  }
};
</script>

<style scoped>
.myswiper {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.swiper-slide {
  width: 100%;
  height: 100%;
  font-size: 0;
  background-color: #008c8c;
}
.swiper-slide img {
  width: 100%;
}
</style>

自定义分页器样式
<style>
.myswiper-pagination {
  z-index: 1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  height: 20px;
}

.myswiperPag {
  display: flex;
  justify-content: center;
  align-items: center;
}

.myswiper-pagination-customs {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: rgb(236, 231, 231, 0.8);
}

.myswiper-pagination-customs-active {
  background-color: hotpink;
}
</style>