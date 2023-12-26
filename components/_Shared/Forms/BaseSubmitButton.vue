<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    :class="loading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-primary-500'"
    :disabled="loading"
    class="rounded-lg py-1.5 text-base text-white shadow-[0px_3px_10px_#0000001a]"
    type="submit"
  >
    <span v-if="!loading">{{ label }}</span>
    <span
      v-else
      class="h-6 w-6 inline-block animate-spin rounded-full border-4 border-gray-300 border-t-white duration-300"
    />
  </button>
</template>
