import React, { useEffect } from 'react';
import { YellowBox } from 'react-native';
import { SplashScreen } from 'expo';
import Navigator from './src/navigation/';
import { createStore, Provider } from './src/stores/createStore';

const store = createStore();

SplashScreen.preventAutoHide();

export default function App() {
  useEffect(() => {
    async function bootstrap() {
      await store.bootstrap();

      YellowBox.ignoreWarnings(['Require cycle:']);
      SplashScreen.hide();
    }
    bootstrap();
  }, []);

  return (
    <Provider value={store}>
      <Navigator />
    </Provider>
  );
}
