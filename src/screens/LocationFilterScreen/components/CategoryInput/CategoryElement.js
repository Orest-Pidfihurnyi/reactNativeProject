import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import s from './styles';
import colors from '../../../../styles/colors';
import Touchable from '../../../../components/Touchable/Touchable';

function CategoryElement({ locationElement, onPress }) {
  return (
    <Touchable
      onPress={() => onPress(locationElement)}
      style={s.container}
    >
      <View style={s.containerWithBottomBorder}>
        <View style={s.locationContainer}>
          <Text style={s.locationText}>{locationElement}</Text>
          <View style={s.locationRight}>
            <Ionicons
              name="ios-arrow-forward"
              size={32}
              color={colors.grayBorder}
            />
          </View>
        </View>
      </View>
    </Touchable>
  );
}

CategoryElement.propTypes = {
  locationElement: T.string,
  onPress: T.func,
};

export default CategoryElement;
