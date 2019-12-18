import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  emailContainer: {
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.grayBorder,
    height: 44,
    marginHorizontal: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  forgotPassword: {
    position: 'absolute',
    right: 0,
    bottom: -30,
    fontSize: 14,
    color: colors.primary,
  },
  errorNotActiveMessage: {
    color: colors.gray,
    position: 'absolute',
    left: 0,
    bottom: -20,
    fontSize: 12,
  },
  errorIcon: {
    position: 'absolute',
    right: 16,
    top: 13,
  },
  errorMessage: {
    position: 'absolute',
    left: 0,
    bottom: -20,
    color: colors.red,
    fontSize: 12,
  },
  label: {
    position: 'absolute',
    zIndex: 3,
    left: 16,
    top: -11,
    paddingHorizontal: 8,
    color: colors.primary,
    fontWeight: '500',
  },
  labelBackgroundLine: {
    position: 'absolute',
    zIndex: 2,
    height: 3,
    top: -1,
    left: 16,
    backgroundColor: colors.white,
  },
  labelBackgroundLineTouched: {
    top: -2,
  },
  labelBackgroundLineFocused: {
    position: 'absolute',
    zIndex: 2,
    height: 3,
    width: 50,
    top: -2,
    left: 16,
    backgroundColor: colors.white,
  },
  labelWidthEmail: {
    width: 51,
  },
  labelWidthPassword: {
    width: 81,
  },
  labelWidthRepeatPassword: {
    width: 131,
  },
  labelError: {
    color: colors.red,
  },
  focusedInput: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  errorInput: {
    borderColor: colors.red,
    borderWidth: 2,
  },
});

export default s;
