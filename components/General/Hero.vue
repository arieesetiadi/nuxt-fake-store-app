<script setup lang="ts">
  import "~/assets/css/swiper.css";
</script>

<template>
  <Swiper
    :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: true,
    }"
    :pagination="{ dynamicBullets: true }"
    :navigation="true"
    class="rounded-lg">
    <SwiperSlide v-for="i in 3" :key="i">
      <NuxtImg :src="`/images/banners/${i}.jpg`" class="w-full" />
    </SwiperSlide>
  </Swiper>
</template>
