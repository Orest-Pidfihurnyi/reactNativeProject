import { StyleSheet } from 'react-native';
import colors from '../../../../../../styles/colors';

const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
  },
  containerWithBottomBorder: {
    width: '100%',
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: colors.black,
  },
});

export default s;
