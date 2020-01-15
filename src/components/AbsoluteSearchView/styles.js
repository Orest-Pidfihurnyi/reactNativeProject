import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { windowParams } from '../../styles/dimensions';

const s = StyleSheet.create({
  absoluteSearchView: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    zIndex: 2,
    backgroundColor: colors.white,
    paddingBottom: 8,
    width: windowParams.width,
    paddingHorizontal: 16,
  },
});

export default s;
