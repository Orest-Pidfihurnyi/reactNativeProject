import React, { useEffect } from 'react';
import { SplashScreen } from 'expo';
import Navigator from './src/navigation/';
import { createStore, Provider } from './src/stores/createStore';

const store = createStore();

SplashScreen.preventAutoHide();

export default function App() {
  useEffect(() => {
    store.bootstrap();

    SplashScreen.hide();
  }, []);

  return (
    <Provider value={store}>
      <Navigator />
    </Provider>
  );
}
