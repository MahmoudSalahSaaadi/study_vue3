import { storeToRefs } from 'pinia';
import { useAuthStore } from '~/stores/auth';

const store = useAuthStore();
const { authenticated } = storeToRefs(store);

export default defineNuxtRouteMiddleware(() => {
  if (authenticated.value)
    return navigateTo('/');
});
