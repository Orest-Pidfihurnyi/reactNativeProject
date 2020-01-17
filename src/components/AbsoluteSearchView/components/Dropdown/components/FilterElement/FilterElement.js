import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import T from 'prop-types';
import Touchable from '../../../../../../components/Touchable/Touchable';
import s from './styles';

function FilterElement({ item, onPress }) {
  return (
    <Touchable onPress={() => onPress(item)} style={s.container}>
      <View style={s.containerWithBottomBorder}>
        <View style={s.locationContainer}>
          <Text style={s.locationText}>{item}</Text>
        </View>
      </View>
    </Touchable>
  );
}

FilterElement.propTypes = {
  item: T.any,
  onPress: T.func,
};

export default observer(FilterElement);
