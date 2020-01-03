import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  sortByContainer: {
    paddingVertical: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingBottom: 8,
  },
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
    width: '33.3%',
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
  middleButton: {
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  focusedCurrencyItem: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    borderColor: colors.noColor,
  },
  freeChangeCurrencyItem: {
    width: '50%',
  },
  currencyText: {
    color: colors.primary,
    fontSize: 14,
  },
  focusedCurrencyText: {
    color: colors.white,
  },
});

export default s;
