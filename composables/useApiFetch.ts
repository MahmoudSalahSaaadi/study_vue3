import { defu } from 'defu';
import type { UseFetchOptions } from 'nuxt/app';

export function useApiFetch<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const authStore = useAuthStore();
  const userAuth = useCookie('token');
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: `${config.public.apiUrl}/api/v1/dashboard`,
    headers: {
      'Authorization': `Bearer ${userAuth.value}`,
      'Accept-Language': 'en',
      'Bu-Id': authStore.activeBu,
    },

    // onResponse(_ctx) {},
    // onResponseError(_ctx) {}
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}
