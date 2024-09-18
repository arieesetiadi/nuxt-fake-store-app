<script setup lang="ts">
  //
</script>

<template>
  <div class="mb-10">
    <ProductListFilter />
  </div>

  <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
    <ProductListItem v-for="i in 15" :key="i" />
  </div>
</template>
