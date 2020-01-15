import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingLeft: 16,
  },
  containerWithBottomBorder: {
    width: '100%',
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  locationText: {
    fontSize: 16,
    color: colors.black,
  },
});

export default s;
