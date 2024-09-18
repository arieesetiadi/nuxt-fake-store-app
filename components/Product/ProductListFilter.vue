<script setup lang="ts">
  const sort = defineModel("sort");
</script>

<template>
  <div class="flex flex-col justify-between gap-5 lg:flex-row lg:gap-0">
    <div class="mb-5 grid grid-cols-2 gap-5 lg:mb-0 lg:grid-cols-4 lg:gap-10">
      <button v-for="i in 4" :key="i" class="btn btn-ghost btn-sm shadow">
        Category {{ i }}
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
