<script setup>
import BaseToast from '~/components/_Shared/BaseToast.vue';
</script>

<template>
  <div>
    <main class="relative flex h-screen">
      <div class="w-full grid place-items-center h-full">
        <slot />
      </div>
    </main>
    <BaseToast />
  </div>
</template>
