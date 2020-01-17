import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  inputContainer: {
    height: '100%',
    minWidth: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    alignItems: 'center',
    marginRight: 8,
    overflow: 'visible',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    borderRadius: 8,
  },
  inputStyles: {
    fontSize: 16,
    color: colors.black,
  },
  priceRange: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceLeft: {
    paddingRight: 8,
  },
  priceRight: {
    paddingLeft: 8,
  },
  rightButton: {
    top: 2,
    paddingLeft: 8,
  },
  sortBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortByLeft: {
    marginRight: 8,
    fontSize: 16,
    color: colors.black,
  },
  sortByRight: {
    color: colors.primary,
    fontSize: 16,
  },
});

export default s;
