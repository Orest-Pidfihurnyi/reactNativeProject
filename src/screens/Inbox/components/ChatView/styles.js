import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  // Header styles

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

  // Product View (which located below header,
  // it is a button, after click on it,
  // u will directed on productDetails screen)

  chatItemContainer: {
    height: 58,
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },
  chatItemLeftContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    paddingRight: 8,
  },
  productImage: {
    width: '100%',
    height: 32,
    borderRadius: 16,
  },
  productRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chatLeft: {
    width: '85%',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 14,
    color: colors.black,
  },
  productDescription: {
    color: colors.gray,
    fontSize: 14,
  },
  arrowRightIcon: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // ScrollView ( container with messages )

  mainChatView: {
    flex: 1,
  },

  main: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
  },

  scrollView: {
    flexDirection: 'column',
  },

  // footer (container where user creates new message)

  footer: {
    height: 52,
    width: '100%',
    backgroundColor: colors.white,
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  messageInputContainer: {
    width: '90%',
    height: 36,
    borderRadius: 4,
    borderColor: colors.grayBorder,
    backgroundColor: colors.grayBorder,
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
  },

  textInput: {
    width: '100%',
    color: colors.black,
    fontSize: 16,
  },
});

export default s;
