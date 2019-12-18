import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.grayBorder,
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  textWrapper: {
    flexDirection: 'row',
  },
  authButton: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 44,
  },
});

export default s;
