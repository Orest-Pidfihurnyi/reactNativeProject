import React from 'react';
import { observer } from 'mobx-react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import styles from '../../styles/styles';
import NavigationService from '../../services/NavigationService';
import { useStore } from '../../stores/createStore';

function BrowseScreen() {
  const store = useStore();

  return (
    <View style={s.container}>
      <Text>
        {store.auth.isLoggedIn
          ? `Авторизированно, user name: ${store.viewer.user.fullName}`
          : 'Не авторизировано'}
      </Text>
      <Button
        title="Go to registration"
        onPress={() => NavigationService.navigateToRegistration()}
      />
    </View>
  );
}

BrowseScreen.navigationOptions = () => ({
  title: 'Browse',
  headerStyle: styles.header,
});

BrowseScreen.propTypes = {};

export default observer(BrowseScreen);
