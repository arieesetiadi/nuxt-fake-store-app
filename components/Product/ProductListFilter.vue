<script setup lang="ts">
  //
</script>

<template>
  <div class="flex justify-between">
    <div class="grid grid-cols-4 gap-10">
      <button v-for="i in 4" :key="i" class="btn btn-ghost btn-sm">
        Category {{ i }}
      </button>
    </div>

    <div class="flex items-center gap-2">
      <span class="text-sm font-bold">Sort:</span>
      <select class="select select-bordered select-sm w-full max-w-xs">
        <option value="desc">Latest</option>
        <option value="asc">Oldest</option>
      </select>
    </div>
  </div>
</template>
