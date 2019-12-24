import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import styles from '../../styles/styles';
import NavigationService from '../../services/NavigationService';

function InboxScreen() {
  return (
    <View style={s.container}>
      <Text>InboxScreen</Text>
      <Button
        title="Go to registration"
        onPress={() => NavigationService.navigateToRegistration()}
      />
    </View>
  );
}

InboxScreen.navigationOptions = () => ({
  title: 'Inbox',
  headerStyle: styles.header,
});

InboxScreen.propTypes = {};

export default InboxScreen;
