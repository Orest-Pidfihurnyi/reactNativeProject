import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import styles from '../../styles/styles';
import { NavigationService } from '../../services';
import screens from '../../navigation/screens';

function ProfileScreen() {
  return (
    <View style={s.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="go to Settings"
        onPress={() => NavigationService.navigate(screens.Settings)}
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
