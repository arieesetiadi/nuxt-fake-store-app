<script setup lang="ts">
  //
</script>

<template>
  <NuxtLink href="/">
    <div
      class="card card-compact bg-base-100 shadow-md transition-all duration-200 hover:shadow-lg">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes" />
      </figure>

      <div class="card-body gap-0">
        <div class="flex gap-2">
          <h2 class="card-title mb-2 flex-1 text-base font-normal">
            Product Title
          </h2>
        </div>

        <h3 class="mb-1 text-base font-bold">$199</h3>

        <p class="mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque,
          obcaecati...
        </p>

        <div class="mb-5 flex justify-start gap-2">
          <div class="badge badge-outline rounded-lg">Fashion</div>
          <div class="badge badge-outline rounded-lg">Products</div>
        </div>

        <div class="card-actions justify-end gap-5">
          <button>
            <Icon name="ri:heart-3-line" size="14" />
          </button>

          <button>
            <Icon name="ri:shopping-cart-line" size="14" />
          </button>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
