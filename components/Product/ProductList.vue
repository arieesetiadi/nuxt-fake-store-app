<script setup lang="ts">
  import type { Product } from "~/lib/types";

  const { data: products } = useApiFetch<Product[]>("/products");
</script>

<template>
  <div class="mb-10">
    <ProductListFilter />
  </div>

  <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
    <ProductListItem v-for="product in products" :key="product.id" :product />
  </div>
</template>
