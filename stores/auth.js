import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    ksa: 'B48D8E40-899E-4DCF-A704-B05EC5886666',
    eg: 'B48D8E40-899E-4DCF-A704-B05EC5880000',
    activeBu: 'ksa',
    bu: {
      id: '',
    },
    user: {},
    authenticated: false,
  }),
  actions: {
    logout() {
      const token = useCookie('token');

      this.authenticated = false;
      token.value = null;
      this.user = {};
    },
  },
  persist: true,
});
