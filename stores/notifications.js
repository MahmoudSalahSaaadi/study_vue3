export const useNotificationsStore = defineStore('notifications', {
  state: () => ({
    type: '',
    message: '',
  }),
  actions: {
    push(type, message) {
      this.type = type;
      this.message = message;

      setTimeout(() => {
        this.clear();
      }, 5000);
    },
    clear() {
      this.type = '';
      this.message = '';
    },
  },
});
