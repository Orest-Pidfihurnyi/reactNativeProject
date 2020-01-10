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
    right: 16,
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
