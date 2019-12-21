import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import T from 'prop-types';
import s from './styles';
import colors from '../../styles/colors';
import { isAndroid } from '../../utils';

function HeaderBackIcon({ onPress }) {
  return isAndroid ? (
    <View style={s.containerAndroid}>
      <TouchableNativeFeedback onPress={onPress}>
        <Ionicons
          name="ios-arrow-back"
          size={32}
          color={colors.gray}
        />
      </TouchableNativeFeedback>
    </View>
  ) : (
    <TouchableOpacity style={s.containerIos} onPress={onPress}>
      <Ionicons name="ios-arrow-back" size={32} color={colors.gray} />
    </TouchableOpacity>
  );
}

HeaderBackIcon.propTypes = {
  onPress: T.func,
};

export default HeaderBackIcon;
