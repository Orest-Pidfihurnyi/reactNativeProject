import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { NavigationService } from '../services';
import { getPriceFromStr, getPriceToStr } from '../utils';

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

export function getOwnerById(ownerId) {
  return axios.get(`${BASE_URL}users/${ownerId}`);
}

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

  addProductToSaved(productId) {
    return axios.post(`${BASE_URL}products/${productId}/saved`);
  },

  uploadPhoto(url, mimeType) {
    const formData = new FormData();

    formData.append('image', {
      uri: url,
      name: 'image',
      type: `image/${mimeType}`,
    });

    return axios.post(`${BASE_URL}upload/images`, formData);
  },

  uploadProduct(
    productTitle,
    productDescription,
    productPhotos,
    productPrice,
    productLocation,
  ) {
    return axios.post(`${BASE_URL}products`, {
      title: productTitle,
      description: productDescription,
      photos: productPhotos,
      price: +productPrice,
      location: productLocation,
    });
  },

  deleteProductFromSaved(productId) {
    return axios.delete(`${BASE_URL}products/${productId}/saved`);
  },

  fetchSaved() {
    return axios(`${BASE_URL}products/saved`);
  },

  getById(id) {
    return axios(`${BASE_URL}products/${id}`);
  },

  fetchOwnProducts(id) {
    return axios(`${BASE_URL}users/${id}/products`);
  },

  fetchMore({ from, limit }) {
    return axios(
      `${BASE_URL}products/latest?from=${from}&limit=${limit}`,
    );
  },

  searchByFilter(
    keywords,
    locationFilter,
    priceFrom,
    priceTo,
    isFree,
  ) {
    const locationStr = locationFilter
      ? `location=${locationFilter}&`
      : '';
    const keywordsStr = keywords ? `keywords=${keywords}&` : '';
    const strPriceFrom = getPriceFromStr(priceFrom, isFree);
    const strPriceTo = getPriceToStr(priceTo, isFree);

    console.log('prices ', strPriceFrom, strPriceTo);

    console.log(
      `${BASE_URL}products/search?${locationStr}${keywordsStr}${strPriceFrom}${strPriceTo}offset=0`,
    );

    return axios.get(
      `${BASE_URL}products/search?${locationStr}${keywordsStr}${strPriceFrom}${strPriceTo}offset=0`,
    );
  },
};

export const Chats = {
  createChat(id, message) {
    return axios.post(`${BASE_URL}/products/${id}/createChat`, {
      message,
    });
  },
};
