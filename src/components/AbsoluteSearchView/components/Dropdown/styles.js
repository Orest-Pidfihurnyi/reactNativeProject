import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  absoluteDropDown: {
    position: 'absolute',
    top: 44,
    left: 0,
    right: 0,
    height: 154,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
});

export default s;
