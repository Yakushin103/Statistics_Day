import cookie from 'js-cookie'

export const token = {
  access: {
    name: 'token',
    get() {
      return cookie.get(this.name);
    },
    set(token: string) {
      return cookie.set(this.name, token);
    },
  },

  refresh: {
    name: 'refresh',
    get() {
      return cookie.get(this.name);
    },
    set(token: string) {
      return cookie.set(this.name, token);
    },
  },
}
