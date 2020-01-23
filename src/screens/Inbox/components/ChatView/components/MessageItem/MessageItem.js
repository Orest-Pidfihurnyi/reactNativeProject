import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import { observer } from 'mobx-react';
import s from './styles';

function MessageItem({ message, isRight }) {
  return (
    <View style={[s.paddingBottom, isRight && s.moveRight]}>
      <View style={[s.messageContainer, isRight && s.rightSide]}>
        <Text style={[s.message, isRight && s.ownMessage]}>
          {message.text}
        </Text>
        <Text style={[s.time, isRight && s.timeRight]}>
          {message.getDeliveryTime()}
        </Text>
      </View>
    </View>
  );
}

MessageItem.propTypes = {
  message: T.object,
  isRight: T.bool,
};

export default observer(MessageItem);
