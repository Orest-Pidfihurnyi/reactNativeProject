import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import s from './styles';

function UserImage({ style, initials, initialsStyle }) {
  return (
    <View style={style}>
      <Text style={[s.initials, initialsStyle]}>{initials}</Text>
    </View>
  );
}

UserImage.propTypes = {
  style: T.object,
  initialsStyle: T.object,
  initials: T.string,
};

export default UserImage;
