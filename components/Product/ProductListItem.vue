<script setup lang="ts">
  import type { Product } from "~/lib/types";

  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <NuxtLink :href="`/products/${product.id}`">
    <div
      class="card card-compact h-full bg-base-100 shadow transition-all duration-200 hover:shadow-lg">
      <figure class="h-[200px]">
        <NuxtImg
          :src="product.image"
          alt="Shoes"
          height="100"
          width="100"
          fit="inside"
          format="webp"
          quality="65" />
      </figure>

      <div class="card-body gap-0">
        <div class="flex gap-2">
          <h2 class="card-title mb-2 flex-1 text-base font-normal">
            {{ product.title }}
          </h2>
        </div>

        <h3 class="mb-1 text-base font-bold">${{ product.price }}</h3>

        <p class="mb-5">
          {{
            product.description.length > 100
              ? product.description.slice(0, 100) + "..."
              : product.description
          }}
        </p>

        <div class="mb-5 flex justify-start gap-2">
          <div class="badge badge-outline rounded-lg">
            {{ product.category }}
          </div>
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
