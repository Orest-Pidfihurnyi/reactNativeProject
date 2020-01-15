import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import T from 'prop-types';
import colors from '../../../../styles/colors';
import Touchable from '../../../../components/Touchable/Touchable';
import s from './styles';

function FoundElement({ item, onPress }) {
  return (
    <Touchable onPress={() => onPress(item.id)} style={s.container}>
      <View style={s.containerWithBottomBorder}>
        <View style={s.locationContainer}>
          <Text style={s.locationText}>{item.title}</Text>
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

FoundElement.propTypes = {
  item: T.object,
  onPress: T.func,
};

export default observer(FoundElement);
