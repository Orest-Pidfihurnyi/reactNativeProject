import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { NavigationService } from '../services';

const BASE_URL = 'https://apiko-intensive-backend.herokuapp.com/';

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
    NavigationService.navigateToLogin();
  },

  isLoggedIn() {
    return !!this._token;
  },

  login({ email, password }) {
    return axios.post(`${BASE_URL}auth/login`, {
      email,
      password,
    });
  },

  register({ email, password, fullName }) {
    return axios.post(`${BASE_URL}auth/register`, {
      email,
      password,
      fullName,
    });
  },
};

export const Account = {
  getUser() {
    return axios.get(`${BASE_URL}account`);
  },

  getUserById(userId) {
    return axios.get(`${BASE_URL}users/${userId}`);
  },
};

export const Products = {
  fetchLatest() {
    return axios(`${BASE_URL}products/latest`);
  },
  getById(id) {
    return axios(`${BASE_URL}products/${id}`);
  },
  fetchOwnProducts(id) {
    return axios(`${BASE_URL}users/${id}/products`);
  },
};
