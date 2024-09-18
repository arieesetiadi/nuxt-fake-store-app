<script setup lang="ts">
  import type { Product } from "~/lib/types";

  const sort = ref<"asc" | "desc">("desc");
  const limit = ref<number>(10);

  const { data: products } = useApiFetch<Product[]>("/products", {
    query: { sort, limit },
  });
</script>

<template>
  <div class="mb-10">
    <ProductListFilter v-model:sort="sort" />
  </div>

  <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
    <ProductListItem v-for="product in products" :key="product.id" :product />
  </div>
</template>
