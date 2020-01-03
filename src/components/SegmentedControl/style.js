import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  changeCurrency: {
    width: '100%',
    height: 32,
    borderRadius: 4,
    flexDirection: 'row',
    marginBottom: 8,
  },
  changeCurrencyItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderWidth: 1,
    borderColor: colors.grayBorder,
  },
  leftButton: {
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  rightButton: {
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  focusedCurrencyItem: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    borderColor: colors.noColor,
  },
  focusedCurrencyText: {
    color: colors.white,
  },
});

export default s;
