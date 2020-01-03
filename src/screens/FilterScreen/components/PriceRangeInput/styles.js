import { StyleSheet } from 'react-native';
import colors from '../../../../styles/colors';

const s = StyleSheet.create({
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 4,
    width: '48%',
    flexDirection: 'row',
    borderWidth: 1,
    color: colors.black,
    borderColor: colors.grayBorder,
    height: 44,
    marginVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  textInput: {
    color: colors.black,
    fontWeight: 'bold',
    width: '50%',
  },

  focusedInput: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  simpleText: {
    color: colors.black,
  },
});

export default s;
