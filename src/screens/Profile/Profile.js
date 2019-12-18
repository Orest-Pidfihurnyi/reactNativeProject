import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import styles from '../../styles/styles';
import NavigationService from '../../services/NavigationService';

function ProfileScreen() {
  return (
    <View style={s.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to registration"
        onPress={() => NavigationService.navigateToRegistration()}
      />
    </View>
  );
}

ProfileScreen.navigationOptions = () => ({
  title: 'Profile',
  headerStyle: styles.header,
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
