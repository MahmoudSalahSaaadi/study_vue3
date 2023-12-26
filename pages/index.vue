<script setup>
import { useAuthStore } from '~/stores/auth';

const auth = useAuthStore();

function logout() {
  auth.logout();
}
</script>

<template>
  <div class="flex flex-col">
    <NuxtLink v-if="!auth.authenticated" to="/auth/login">
      Login
    </NuxtLink>

    <button v-else class="btn btn-primary w-fit" @click="logout">
      logout
    </button>
  </div>
</template>
