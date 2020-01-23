import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
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
  borderBottomLine: {
    width: '100%',
    height: 1,
    backgroundColor: colors.grayBorder,
  },
});

export default s;
