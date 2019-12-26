import React, { useState } from 'react';
import { Linking } from 'expo';
import { WebView } from 'react-native-webview';
import { View, Text, Image, Alert } from 'react-native';
import {
  MaterialIcons,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import apikoLabel from '../../../assets/apiko-marketplace.png';
import s from './styles';
import { useStore } from '../../stores/createStore';
import Touchable from '../../components/Touchable/Touchable';
import styles from '../../styles/styles';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import colors from '../../styles/colors';
import { NavigationService } from '../../services';

function SettingsScreen() {
  const store = useStore();
  const [showWebView, setIsShowWebView] = useState(false);

  async function logout() {
    Alert.alert(
      'Log out alert',
      'Are u sure that u want to log out ?',
      [
        {
          text: 'OK',
          onPress: async () => {
            await store.auth.logout();
            NavigationService.navigateToLogin();
          },
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
    );
  }

  return (
    <View style={s.settingsView}>
      <View style={s.brandSection}>
        <Image source={apikoLabel} />
        <Text style={s.brandText}>
          Apiko Marketplace App Ver. 1.1.1
        </Text>
      </View>
      <View style={s.settingsCategoriesContainer}>
        <Touchable
          style={s.settingsItem}
          onPress={() =>
            Linking.openURL(
              'https://en.wikipedia.org/wiki/Privacy_policy',
            )
          }
        >
          <Text style={s.settingsItemText}>Privacy Policy</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={32}
            color={colors.grayBorder}
          />
        </Touchable>
        <View style={s.hr} />
        <Touchable
          style={s.settingsItem}
          onPress={() => setIsShowWebView(!showWebView)}
        >
          <Text style={s.settingsItemText}>Terms & Conditions</Text>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={32}
            color={colors.grayBorder}
          />
        </Touchable>
      </View>
      <Touchable style={s.logoutButton} onPress={logout}>
        <MaterialCommunityIcons
          name="logout"
          size={32}
          color={colors.primary}
        />
        <Text style={s.logoutText}>log out</Text>
      </Touchable>
      {showWebView && (
        <WebView
          source={{
            uri: 'https://en.wikipedia.org/wiki/Terms_of_service',
          }}
        />
      )}
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
