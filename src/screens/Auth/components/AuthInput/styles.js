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
  labelContainer: {
    position: 'absolute',
    left: 16,
    top: -11,
  },
  label: {
    zIndex: 3,
    paddingHorizontal: 8,
    color: colors.primary,
    fontWeight: '500',
  },
  labelBackgroundLine: {
    position: 'absolute',
    zIndex: 2,
    height: 3,
    top: 8,
    width: '100%',
    backgroundColor: colors.white,
  },
  labelBackgroundLineTouched: {
    top: 8,
  },
  labelBackgroundLineFocused: {
    position: 'absolute',
    height: 3,
    width: '100%',
    top: 8,
    backgroundColor: colors.white,
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
