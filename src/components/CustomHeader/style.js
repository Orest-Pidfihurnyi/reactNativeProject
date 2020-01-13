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
    paddingHorizontal: 8,
    backgroundColor: colors.noColor,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iphoneStyles: {
    paddingBottom: 8,
  },
  profileHeightStyle: {
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
