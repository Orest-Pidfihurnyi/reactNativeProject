import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import styles from '../../styles/styles';
import NavigationService from '../../services/NavigationService';

function SavedScreen() {
  return (
    <View style={s.container}>
      <Text>SavedScreen</Text>
      <Button
        title="Go to registration"
        onPress={() => NavigationService.navigateToRegistration()}
      />
    </View>
  );
}

SavedScreen.navigationOptions = () => ({
  title: 'Saved',
  headerStyle: styles.header,
});

SavedScreen.propTypes = {};

export default SavedScreen;
