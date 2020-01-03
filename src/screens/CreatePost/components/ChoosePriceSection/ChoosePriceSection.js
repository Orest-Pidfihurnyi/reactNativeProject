import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import CustomTextInput from '../../../../components/CustomTextInput/CustomTextInput';
import s from './styles';

function ChoosePriceSection({ isFree, price, changePriceHandler }) {
  return (
    !isFree && (
      <React.Fragment>
        <View style={s.hr} />
        <CustomTextInput
          placeholder="Enter price"
          rightText="uah"
          keyboardType="number-pad"
          autoCompleteType="cc-number"
          value={price}
          onChangeText={changePriceHandler}
        />
      </React.Fragment>
    )
  );
}

ChoosePriceSection.propTypes = {
  isFree: T.bool,
  price: T.string,
  changePriceHandler: T.func,
};

export default ChoosePriceSection;
