import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import styles from '../../styles/styles';
import NavigationService from '../../services/NavigationService';

function BrowseScreen() {
  return (
    <View style={s.container}>
      <Text>BrowseScreen</Text>
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

export default BrowseScreen;
