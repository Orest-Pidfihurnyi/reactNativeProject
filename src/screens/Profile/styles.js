import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
  },

  flatList: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  profileContent: {
    flex: 1,
    paddingHorizontal: 8,
  },

  // large header styles

  userAvatar: {
    height: 72,
    width: 72,
    borderRadius: 50,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  largeHeader: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userFullName: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: 1,
  },

  backButtonLargeHeader: {
    position: 'absolute',
    top: 0,
    left: 1,
  },
  headerBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 21,
  },
  sellerInfo: {
    color: colors.black,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  boldNumber: {
    fontWeight: '500',
    color: colors.black,
    fontSize: 14,
  },
  sellerInfoMiddle: {
    borderColor: colors.grayBorder,
    borderRightWidth: 1,
    borderLeftWidth: 1,
  },

  // small header styles

  leftHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerSmallUserContainer: {
    marginLeft: 19,
    flexDirection: 'row',
    alignItems: 'center',
  },

  smallUserAvatar: {
    height: 36,
    width: 36,
    borderRadius: 36,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userFirstName: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },

  initialsStyle: {
    fontSize: 16,
  },

  // profile screen styles

  profileContentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItems: {
    alignItems: 'center',
  },
  noItemsImage: {
    height: 128,
    width: 128,
  },
  noItemsText: {
    fontSize: 16,
    color: colors.gray,
    marginTop: 16,
  },
});

export default s;
