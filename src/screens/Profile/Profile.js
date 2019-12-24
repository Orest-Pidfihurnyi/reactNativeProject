import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import { useStore } from '../../stores/createStore';
import styles from '../../styles/styles';

function ProfileScreen() {
  const store = useStore();

  return (
    <View style={s.container}>
      <Text>ProfileScreen</Text>
      <Button title="LOGOUT" onPress={() => store.auth.logout()} />
    </View>
  );
}

ProfileScreen.navigationOptions = () => ({
  title: 'Profile',
  headerStyle: styles.header,
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
