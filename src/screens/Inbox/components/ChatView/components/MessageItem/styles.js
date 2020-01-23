import { StyleSheet } from 'react-native';
import colors from '../../../../../../styles/colors';

const s = StyleSheet.create({
  paddingBottom: {
    alignSelf: 'flex-start',
    maxWidth: '75%',
    minHeight: 36,
    paddingBottom: 8,
  },
  moveRight: {
    alignSelf: 'flex-end',
  },
  messageContainer: {
    flexDirection: 'row',
    minHeight: 36,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    marginLeft: 8,
  },
  message: {
    fontSize: 16,
    color: colors.black,
  },
  time: {
    fontSize: 12,
    color: colors.gray,
    lineHeight: 18,
    marginLeft: 8,
  },
  timeRight: {
    color: colors.white,
  },
  rightSide: {
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    marginLeft: 0,
    marginRight: 8,
  },
  ownMessage: {
    color: colors.white,
  },
});

export default s;
