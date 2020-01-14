import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import {
  headerHeight,
  profileHeaderHeight,
} from '../../styles/dimensions';

const s = StyleSheet.create({
  headerContainer: {
    height: headerHeight,
    paddingTop: 20,
    color: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.grayBorder,
    paddingHorizontal: 16,
    elevation: 0,
    flexDirection: 'row',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iphoneStyles: {
    paddingBottom: 8,
  },
  profileLargeStyle: {
    height: profileHeaderHeight,
    backgroundColor: colors.white,
  },
  forProductDetails: {
    borderBottomWidth: 0,
    backgroundColor: colors.noColor,
  },
  forCreatePost: {
    backgroundColor: colors.white,
  },
});

export default s;
