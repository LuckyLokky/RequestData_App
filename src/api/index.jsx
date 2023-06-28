const api = {
  request: async (url, params = {}) => {
    const response = await fetch(url, params);
    const data = await response.json();
    return data;
  },
  get: async (url) => {
    const data = await api.request(url);
    return data;
  },
};

const usersApi = {
  getUsers: async (url) => {
    return api.get(url);
  },
};

const postsApi = {
  getPosts: async (url) => {
    return api.get(url);
  },
};
const photosApi = {
  getPhotos: async (url) => {
    return api.get(url);
  },
};

export const API = {
  usersApi,
  postsApi,
  photosApi,
};
