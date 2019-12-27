import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMessage: {
    alignItems: 'center',
  },
  noMessageIcon: {
    height: 128,
    width: 128,
  },
  noMessageText: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 16,
  },
});

export default s;
