import React from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';
import s from './styles';

function CreatePostButton() {
  return (
    <View style={s.cretePostButton}>
      <Ionicons
        name="md-add-circle"
        size={72}
        color={colors.primary}
      />
    </View>
  );
}

export default CreatePostButton;
