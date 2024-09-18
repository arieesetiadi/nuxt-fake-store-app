<script setup lang="ts">
  const { y } = useWindowScroll();
  const isScrolled = ref(false);

  watch(y, () => {
    isScrolled.value = y.value > 0;
  });
</script>

<template>
  <header class="sticky top-0 z-[100]">
    <nav
      class="navbar bg-base-100 transition-all duration-200 ease-in-out xl:px-14"
      :class="isScrolled ? 'shadow-lg' : 'shadow-sm'">
      <div class="flex-1">
        <NuxtLink href="/" class="flex items-center gap-3">
          <NuxtImg
            src="/images/logos/nuxt.svg"
            alt="Nuxt Icon"
            width="36"
            height="36" />
          <span class="text-xl font-semibold">NuxtStore</span>
        </NuxtLink>
      </div>

      <div class="flex gap-5">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-circle btn-ghost">
            <div class="indicator">
              <Icon name="ri:shopping-cart-line" size="20" />
              <span class="badge indicator-item badge-sm">8</span>
            </div>
          </div>

          <div
            tabindex="0"
            class="card dropdown-content card-compact z-10 mt-3 w-52 bg-base-100 shadow">
            <div class="card-body">
              <span class="text-lg font-bold">8 Items</span>
              <span>Subtotal: $999</span>
              <div class="card-actions mt-2">
                <NuxtLink href="/" class="btn btn-sm btn-block">
                  View Cart
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>

        <div class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="avatar btn btn-circle btn-ghost">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <ul
            tabindex="0"
            class="menu dropdown-content menu-sm z-10 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
            <li>
              <NuxtLink href="/" class="justify-between">Profile</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Settings</NuxtLink>
            </li>
            <li>
              <NuxtLink href="/">Logout</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
