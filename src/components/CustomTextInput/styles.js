import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 4,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.grayBorder,
    height: 44,
    marginVertical: 8,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },

  rightText: {
    position: 'absolute',
    color: colors.primary,
    right: 16,
    top: 13,
  },

  focusedInput: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
});

export default s;
