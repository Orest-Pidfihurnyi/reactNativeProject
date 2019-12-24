import React from 'react';
import { View, Text } from 'react-native';
// import s from './styles';

function Empty(props) {
  return (
    <View>
      <Text>{JSON.stringify(props)}</Text>
    </View>
  );
}

export default Empty;
