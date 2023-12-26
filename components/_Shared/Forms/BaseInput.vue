<script setup>
defineProps({
  field: {
    type: Object,
    default: () => {
      return {};
    },
  },
  modelValue: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  search: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(['update:modelValue']);
</script>

<template>
  <div>
    <label
      v-if="!search"
      class="text-primary-600 mb-1 block capitalize"
      :for="name"
    >
      {{ name }}
    </label>
    <div class="flex border border-secondary-200 rounded-lg w-full focus-within:border-primary-500 overflow-hidden bg-white">
      <input
        :id="name"
        :value="modelValue"
        class="w-full autofill:bg-white focus:outline-0 px-2 py-1.5"
        v-bind="{ ...$attrs, ...field }"
        @change="emits('update:modelValue', $event.target.value)"
      >
      <div v-if="$slots.icon" class="flex flex-col justify-center px-2">
        <slot name="icon" />
      </div>
    </div>
  </div>
</template>
