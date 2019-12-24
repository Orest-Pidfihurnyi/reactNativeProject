import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import styles from '../../styles/styles';
import { useStore } from '../../stores/createStore';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import colors from '../../styles/colors';
import { NavigationService } from '../../services';

function SettingsScreen() {
  const store = useStore();

  return (
    <View style={styles.fillAll}>
      <Text>SettingsScreen</Text>
      <Image
        source={require('D:\react-native-learning\reactNativeProjectassetsapiko-marketplace.svg')}
      />
    </View>
  );
}

SettingsScreen.navigationOptions = () => ({
  title: 'Settings',
  headerStyle: styles.header,
  headerLeft: (props) => (
    <HeaderBackIcon
      {...props}
      onPress={() => NavigationService.onGoBack()}
    >
      <Ionicons name="ios-arrow-back" size={32} color={colors.gray} />
    </HeaderBackIcon>
  ),
});

SettingsScreen.propTypes = {};

export default SettingsScreen;
