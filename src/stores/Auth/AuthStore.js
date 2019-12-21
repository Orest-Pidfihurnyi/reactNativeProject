import { getRoot, types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import Api from '../../api';

export const AuthStore = types
  .model('AuthStore', {
    login: asyncModel(loginFlow),
    register: asyncModel(registerFlow),
    isLoggedIn: false,
  })

  .actions((store) => ({
    setIsLoggedIn(bool) {
      store.isLoggedIn = bool;
    },

    logout() {
      store.isLoggedIn = false;
      Api.Auth.logout();
    },
  }));

function loginFlow({ password, email }) {
  return async (flow) => {
    const res = await Api.Auth.login({ password, email });
    Api.Auth.setToken(res.data.token);

    getRoot(flow).viewer.setViewer(res.data.user);
    getRoot(flow).auth.setIsLoggedIn(true);
  };
}

function registerFlow({ password, email, fullName }) {
  return async () => {
    const res = await Api.Auth.register({
      password,
      email,
      fullName,
    });
    console.log(res.data);
  };
}
