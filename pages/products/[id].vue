<script setup lang="ts">
  import "~/assets/css/swiper.css";
  import type { Product } from "~/lib/types";

  const route = useRoute();
  const id = route.params.id;

  const { data: product } = useApiFetch<Product>(`/products/${id}`);
</script>

<template>
  <div class="p-5">
    <div class="mx-auto max-w-screen-xl">
      <div class="justify-between gap-10 md:flex">
        <div class="mb-5 w-full md:mb-0 md:w-1/3">
          <ProductDetailSwiper :image="product?.image!" />
        </div>

        <div class="md:2/3 w-full">
          <div class="mb-3">
            <h1 class="text-xl font-bold">{{ product?.title }}</h1>
            <p>
              Sold 100+
              <span> {{ product?.rating.rate }}/5 </span>
              ({{ product?.rating.count }} rating)
            </p>
          </div>

          <div class="mb-3 flex flex-wrap gap-3">
            <div class="badge badge-ghost rounded-lg">
              {{ product?.category }}
            </div>
          </div>

          <h6 class="mb-5 text-2xl font-bold">${{ product?.price }}</h6>

          <p class="mb-20">{{ product?.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
