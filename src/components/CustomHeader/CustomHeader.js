import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import s from './style';
import { isAndroid } from '../../utils';

function CustomHeader({ children, isProfile }) {
  return (
    <View
      style={[
        s.headerContainer,
        !isAndroid && s.iphoneStyles,
        isProfile && s.profileHeightStyle,
      ]}
    >
      {children}
    </View>
  );
}

CustomHeader.propTypes = {
  children: T.node,
  isProfile: T.bool,
};

export default CustomHeader;
