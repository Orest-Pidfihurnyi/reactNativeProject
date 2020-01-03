import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import T from 'prop-types';
import s from './styles';
import { isAndroid } from '../../utils';

function HeaderBackIcon({ onPress, children, ...props }) {
  return isAndroid ? (
    <View style={s.containerAndroid} {...props}>
      <TouchableNativeFeedback onPress={onPress}>
        {children}
      </TouchableNativeFeedback>
    </View>
  ) : (
    <TouchableOpacity
      style={s.containerIos}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}

HeaderBackIcon.propTypes = {
  onPress: T.func,
  children: T.node,
};

export default HeaderBackIcon;
