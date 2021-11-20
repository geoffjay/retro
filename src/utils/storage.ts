const prefix = "retro_";

const storage = {
  getRetroId: () => {
    return JSON.parse(window.localStorage.getItem(`${prefix}id`) as string);
  },
  setRetroId: (id: string) => {
    window.localStorage.setItem(`${prefix}id`, JSON.stringify(id));
  },
  clearRetroId: () => {
    window.localStorage.removeItem(`${prefix}id`);
  },
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${prefix}token`) as string);
  },
  setToken: (token: string) => {
    window.localStorage.setItem(`${prefix}token`, JSON.stringify(token));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${prefix}token`);
  },
};

export default storage;
