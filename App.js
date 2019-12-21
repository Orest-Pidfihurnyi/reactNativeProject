import makeInspectable from 'mobx-devtools-mst';
import React, { useEffect } from 'react';
import { SplashScreen } from 'expo';
import Navigator from './src/navigation/';
import { createStore, Provider } from './src/stores/createStore';

const store = createStore();
makeInspectable(store);

SplashScreen.preventAutoHide();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider value={store}>
      <Navigator />
    </Provider>
  );
}
