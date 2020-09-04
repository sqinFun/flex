<template>
  <div class="main-slider">
    <swiper :options="swiperOption" ref="swiperSlider">
      <swiper-slide
        class="swiper-slide main-slider__slide"
        v-for="item in getLimitProduct"
        :key="item.id"
      >
        <img class="main-slider__bg" :src="item.url" alt />
        <div class="container">
          <div class="main-slider__content"></div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="container relative">
      <div class="main-slider__control">
        <button @click.prevent="openSlide" class="btn btn_theme_transparent">В каталог</button>
        <div class="swiper-pagination main-slider__pagination" slot="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

//Костыль на подключение слайдера(текущая версия сломана)
import {
  Swiper as SwiperClass,
  Pagination,
  Navigation,
  Mousewheel,
  Autoplay,
} from "swiper/swiper.esm";
import getAwesomeSwiper from "vue-awesome-swiper/dist/exporter";

SwiperClass.use([Pagination, Mousewheel, Navigation, Autoplay]);
Vue.use(getAwesomeSwiper(SwiperClass));
const { Swiper, SwiperSlide } = getAwesomeSwiper(SwiperClass);

import "swiper/swiper-bundle.css";
import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      swiper: "swiper",
    };
  },
  mounted() {
    this.setProductList();
  },
  computed: {
    ...mapGetters(["getLimitProduct"]),
  },
  methods: {
    ...mapActions(["setProductList"]),
    openSlide() {
      let activeSlide = this.$refs.swiperSlider.$swiper.activeIndex,
        slideId = this.getLimitProduct[activeSlide].id;
      this.$router.push(`/catalog/${slideId}`);
    },
  },
};
</script>

<style lang="scss">
.main-slider {
  position: relative;
  &__slide {
    height: 800px;
    position: relative;
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &__content {
    padding-top: 230px;
    z-index: 2;
  }

  &__control {
    position: absolute;
    left: 100px;
    bottom: 150px;
    z-index: 1;
  }

  &__pagination {
    position: static;
    margin-top: 40px;
  }

  .swiper-pagination-bullet {
    margin: 0 6px;
    height: 8px;
    width: 8px;
    border: 1px solid #000;
    background: #000;

    &-active,
    &:hover {
      background: transparent;
      border: 1px solid black;
      opacity: 1;
    }
  }
}
</style>