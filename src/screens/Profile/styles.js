import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
  },
  userAvatar: {
    height: 72,
    width: 72,
    borderRadius: 50,
  },
});

export default s;
