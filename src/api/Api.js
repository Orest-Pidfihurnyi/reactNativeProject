import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const Auth = {
  _token: null,

  async setToken(token) {
    this._token = token;
    try {
      await AsyncStorage.setItem('___token', token);
    } catch (err) {
      console.log(err);
    }

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  async logout() {
    this._token = null;
    try {
      await AsyncStorage.removeItem('___token');
    } catch (err) {
      console.log(err);
    }

    axios.defaults.headers.common.Authorization = undefined;
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    return axios.post('/auth/login', {
      email,
      password,
    });
  },

  register({ email, password, fullName }) {
    return axios.post('/auth/register', {
      email,
      password,
      fullName,
    });
  },
};

export const Account = {
  getUser() {
    return axios.get(`/account`);
  },

  getUserById(userId) {
    return axios.get(`/users/${userId}`);
  },
};

export const Products = {
  fetchLatest() {
    return axios('/products/latest');
  },
  getById(id) {
    return axios(`/products/${id}`);
  },
};
