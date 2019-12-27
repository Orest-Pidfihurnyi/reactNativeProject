import React from 'react';
import { View, Image, Text } from 'react-native';
import noMessageIcon from '../../../assets/noMessage.png';
import s from './styles';
import styles from '../../styles/styles';

function InboxScreen() {
  return (
    <View style={s.container}>
      <View style={s.noMessage}>
        <Image source={noMessageIcon} style={s.noMessageIcon} />
        <Text style={s.noMessageText}>No message yet</Text>
      </View>
    </View>
  );
}

InboxScreen.navigationOptions = () => ({
  title: 'Inbox',
  headerStyle: styles.header,
});

InboxScreen.propTypes = {};

export default InboxScreen;
