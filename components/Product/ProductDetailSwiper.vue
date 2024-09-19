<script setup lang="ts">
  defineProps<{
    image: string | undefined;
  }>();

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
    class="mb-1 h-[400px] rounded-lg">
    <SwiperSlide v-for="i in 5" :key="i">
      <NuxtImg :src="image" class="h-full w-full object-contain p-10" />
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
    :slides-per-view="4"
    :loop="true"
    :freeMode="true"
    :effect="'creative'"
    :watchSlidesProgress="true"
    class="flex gap-2 rounded-lg">
    <SwiperSlide v-for="i in 5" :key="i">
      <NuxtImg :src="image" class="w-full" />
    </SwiperSlide>
  </Swiper>
</template>

<style scoped></style>
