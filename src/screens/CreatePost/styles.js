import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  headerOfGroup: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 14,
    marginHorizontal: 16,
    marginTop: 16,
    textTransform: 'uppercase',
  },
  textInputWrapper: {
    paddingHorizontal: 16,
  },
  textAreaInput: {
    height: 136,
  },
  categoryContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.grayBorder,
  },
  container: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
  },
  photosContainer: {
    marginTop: 8,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    height: 76,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  addPhotoButton: {
    height: 44,
    width: 44,
    borderRadius: 4,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.grayBorder,
    backgroundColor: colors.addPhotosBtnBgc,
  },
  priceView: {
    backgroundColor: colors.white,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    height: 140,
  },
  priceViewFree: {
    height: 67,
  },

  currencyText: {
    color: colors.primary,
    fontSize: 16,
  },
  focusedCurrencyItem: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    borderColor: colors.noColor,
  },
  focusedCurrencyText: {
    color: colors.white,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    marginTop: 8,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  },
  locationLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  locationText: {
    fontSize: 16,
    color: colors.primary,
  },
  locationRight: {},
});

export default s;
