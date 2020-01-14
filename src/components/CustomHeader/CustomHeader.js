import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import s from './style';
import { isAndroid } from '../../utils';

function CustomHeader({
  children,
  isLarge,
  isProductDetails,
  isCreatingPost,
}) {
  return (
    <View
      style={[
        s.headerContainer,
        !isAndroid && s.iphoneStyles,
        isLarge && s.profileLargeStyle,
        isProductDetails && s.forProductDetails,
        isCreatingPost && s.forCreatePost,
      ]}
    >
      {children}
    </View>
  );
}

CustomHeader.propTypes = {
  children: T.node,
  isLarge: T.bool,
  isProductDetails: T.bool,
  isCreatingPost: T.bool,
};

export default CustomHeader;
