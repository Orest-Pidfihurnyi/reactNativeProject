import React from 'react';
import T from 'prop-types';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import { isAndroid } from '../../utils';

const Touchable = ({ onPress, children, style, ...props }) =>
  isAndroid ? (
    <TouchableNativeFeedback {...props} onPress={onPress}>
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity style={style} {...props} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );

Touchable.propTypes = {
  children: T.any,
  onPress: T.func,
  style: T.any,
};

export default Touchable;
