import { StatusBar } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { isAndroid } from '../utils';

const iosStatusBarHeight = isIphoneX() ? 34 : 20;

export const statusBarHeight = isAndroid
  ? StatusBar.currentHeight
  : iosStatusBarHeight;

export const appBarHeight = isAndroid ? 56 : 44;

export const headerHeight = appBarHeight + statusBarHeight;

export const profileHeaderHeight = statusBarHeight + 130;
