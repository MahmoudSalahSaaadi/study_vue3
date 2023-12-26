<script setup>
import { storeToRefs } from 'pinia';
import { TransitionRoot } from '@headlessui/vue';
import { useNotificationsStore } from '~/stores/notifications';

const store = useNotificationsStore();
const { type, message } = storeToRefs(store);

const showToast = computed(() => {
  return !!message.value.length;
});
</script>

<template>
  <TransitionRoot
    :show="showToast"
    enter="transition-opacity duration-75"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-150"
    leave-from="opacity-100"
    leave-to="opacity-0"
  >
    <div
      class="flex text-white duration-200 justify-between p-4 rounded-lg transition w-96 fixed bottom-10 right-4 z-[1111]"
      :class="{ 'bg-green-700': type === 'success', 'bg-red-700': type === 'error' }"
    >
      <div class="flex items-center justify-center">
        <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.85-2.85l-1.4 1.4l4.25 4.25ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"
          />
        </svg>

        <svg v-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
            <path d="m10.25 5.75l-4.5 4.5m0-4.5l4.5 4.5" />
            <circle cx="8" cy="8" r="6.25" />
          </g>
        </svg>
      </div>
      <div class="ml-4 mr-2 w-full">
        <h1 v-if="type" class="font-semibold text-xl">
          {{ type === 'success' ? 'Success' : 'Error' }}
        </h1>
        <p>{{ message }}</p>
      </div>
      <div class="flex items-center justify-center cursor-pointer">
        <svg height="21" viewBox="0 0 21 21" width="21" xmlns="http://www.w3.org/2000/svg">
          <g
            fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
            transform="translate(5 5)"
          >
            <path d="m10.5 10.5-10-10z" />
            <path d="m10.5.5-10 10" />
          </g>
        </svg>
      </div>
    </div>
  </TransitionRoot>
</template>
