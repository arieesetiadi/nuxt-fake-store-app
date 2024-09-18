<script setup lang="ts">
  const thumbsSwiper = ref(null);

  const setThumbsSwiper = (swiper: any) => {
    thumbsSwiper.value = swiper;
  };
</script>

<template>
  <!-- Main Swiper -->
  <Swiper
    :modules="[
      SwiperAutoplay,
      SwiperPagination,
      SwiperNavigation,
      SwiperThumbs,
      SwiperFreeMode,
    ]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    :pagination="{ dynamicBullets: true }"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper }"
    class="mb-1 rounded-lg">
    <SwiperSlide v-for="i in 5" :key="i">
      <NuxtImg
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        class="w-full" />
    </SwiperSlide>
  </Swiper>

  <!-- Thumb Swiper -->
  <Swiper
    @swiper="setThumbsSwiper"
    :modules="[
      SwiperAutoplay,
      SwiperPagination,
      SwiperNavigation,
      SwiperThumbs,
      SwiperFreeMode,
    ]"
    :slides-per-view="3"
    :loop="true"
    :freeMode="true"
    :effect="'creative'"
    :watchSlidesProgress="true"
    class="flex gap-2 rounded-lg">
    <SwiperSlide v-for="i in 5" :key="i">
      <NuxtImg
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
        class="w-full" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
