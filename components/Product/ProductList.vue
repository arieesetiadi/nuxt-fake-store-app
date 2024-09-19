<script setup lang="ts">
  import type { Product, ProductSort } from "~/lib/types";

  const category = ref<string>("");
  const sort = ref<ProductSort>("desc");
  const limit = ref<number>(10);
  const path = computed(() => {
    const basePath = "/products";
    return (
      basePath + (category.value != "" ? `/category/${category.value}` : "")
    );
  });

  const { data: products } = useApiFetch<Product[]>(path, {
    query: { sort, limit },
  });
</script>

<template>
  <div class="mb-10">
    <ProductListFilter v-model:category="category" v-model:sort="sort" />
  </div>

  <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
    <ProductListItem v-for="product in products" :key="product.id" :product />
  </div>
</template>
