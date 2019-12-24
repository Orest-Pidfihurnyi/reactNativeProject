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
  header: {
    ...Platform.select({
      android: {
        elevation: 0,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.black,
      },
    }),
  },
});

export default styles;
