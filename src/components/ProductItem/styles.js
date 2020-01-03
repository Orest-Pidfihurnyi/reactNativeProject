import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  productContainer: {
    width: '49%',
    height: 209,
    paddingTop: 8,
    alignItems: 'center',
    backgroundColor: colors.noColor,
  },
  productItem: {
    height: 209,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    backgroundColor: colors.white,
  },
  imageContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
  },
  productImage: {
    height: 148,
    width: '100%',
  },
  productBottomContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  productTitle: {
    fontSize: 14,
    height: 21,
    color: colors.black,
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  productBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default s;
