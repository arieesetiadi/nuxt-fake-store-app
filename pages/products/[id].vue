<script setup lang="ts">
  import "~/assets/css/swiper.css";

  const route = useRoute();
  const id = route.params.id;
</script>

<template>
  <div class="p-5">
    <div class="mx-auto max-w-screen-xl">
      <div class="justify-between gap-10 md:flex">
        <div class="mb-5 w-full md:mb-0 md:w-1/3">
          <ProductDetailSwiper />
        </div>

        <div class="md:2/3 w-full">
          <div class="mb-3">
            <h1 class="text-xl font-bold">Head Speed Pro Legend</h1>
            <p>Sold 100+ <span>4.2/5</span> (120 rating)</p>
          </div>

          <div class="mb-3 flex gap-3 flex-wrap">
            <div class="badge badge-ghost rounded-lg">Men's Clothing</div>
            <div class="badge badge-ghost rounded-lg">Men's Clothing</div>
          </div>

          <h6 class="mb-5 text-2xl font-bold">$199</h6>

          <p class="mb-20">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday.
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday.
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
