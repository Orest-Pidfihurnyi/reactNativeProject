import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  chatItemContainer: {
    height: 82,
    width: '100%',
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  chatItemLeftContainer: {
    width: 56,
    height: 56,
    paddingBottom: 8,
    paddingRight: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  userAvatar: {
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    alignItems: 'center',
    right: -5,
    bottom: 0,
    height: 20,
    width: 20,
    borderRadius: 20,
  },
  initialsStyle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
  chatItemRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  withBorder: {
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
  },
  chatLeft: {
    width: '75%',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  interlocutor: {
    fontSize: 14,
    color: colors.primary,
  },
  message: {
    color: colors.black,
    fontSize: 14,
  },
  dateAndCounter: {
    width: '25%',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  date: {
    color: colors.gray,
    fontSize: 14,
  },
});

export default s;
