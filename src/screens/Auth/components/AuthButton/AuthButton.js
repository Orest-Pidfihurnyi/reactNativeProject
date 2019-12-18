import React from 'react';
import T from 'prop-types';
import {
  TouchableNativeFeedback,
  TouchableOpacity,
  Text,
} from 'react-native';
import { isAndroid } from '../../../../utils';
import s from './styles';

const Touchable = ({ onSubmit, ...props }) =>
  isAndroid ? (
    <TouchableNativeFeedback onPress={onSubmit}>
      <Text {...props}>{props.children}</Text>
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity {...props} onPress={onSubmit}>
      <Text style={s.textColor}>{props.children}</Text>
    </TouchableOpacity>
  );

Touchable.propTypes = {
  children: T.string,
  onSubmit: T.func,
};

export default Touchable;
