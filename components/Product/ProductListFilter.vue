<script setup lang="ts">
  const sort = defineModel("sort");
  const category = defineModel("category");

  const { data: categories } = useApiFetch<string[]>("/products/categories");
</script>

<template>
  <div class="flex flex-col justify-between gap-5 lg:flex-row lg:gap-0">
    <div class="mb-5 grid grid-cols-2 gap-5 lg:mb-0 lg:grid-cols-4 lg:gap-10">
      <button
        @click="category = categoryName"
        v-for="categoryName in ['', ...categories!]"
        :key="categoryName"
        class="btn btn-ghost btn-sm shadow"
        :class="{ 'btn-active': category == categoryName }">
        {{ String(categoryName || "all").toUpperCase() }}
      </button>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm font-bold">Sort:</span>
      <select v-model="sort" class="select select-sm w-full max-w-xs shadow">
        <option value="desc">Latest</option>
        <option value="asc">Oldest</option>
      </select>
    </div>
  </div>
</template>
