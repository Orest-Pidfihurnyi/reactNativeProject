import { StyleSheet, Platform } from 'react-native';
import colors from '../styles/colors';

const styles = StyleSheet.create({
  fillAll: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.black,
      },
    }),
  },
  headerLeftCloseIcon: {
    marginLeft: 16,
  },
  headerRightCreatePost: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primary,
  },
});

export default styles;
