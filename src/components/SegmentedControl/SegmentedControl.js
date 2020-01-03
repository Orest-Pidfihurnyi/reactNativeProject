import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import Touchable from '../Touchable/Touchable';
import s from './style';

function SegmentedControl({ isFree, setIsFree }) {
  return (
    <View style={s.changeCurrency}>
      <Touchable
        style={[
          s.changeCurrencyItem,
          !isFree && s.focusedCurrencyItem,
          s.leftButton,
        ]}
        onPress={() => setIsFree(false)}
      >
        <Text
          style={[s.currencyText, !isFree && s.focusedCurrencyText]}
        >
          Price
        </Text>
      </Touchable>
      <Touchable
        style={[
          s.changeCurrencyItem,
          isFree && s.focusedCurrencyItem,
          s.rightButton,
        ]}
        onPress={() => setIsFree(true)}
      >
        <Text
          style={[s.currencyText, isFree && s.focusedCurrencyText]}
        >
          Free
        </Text>
      </Touchable>
    </View>
  );
}

SegmentedControl.propTypes = {
  isFree: T.bool,
  setIsFree: T.func,
};

export default SegmentedControl;
