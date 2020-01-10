import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  input: {
    height: 36,
    width: '100%',
    backgroundColor: colors.addPhotosBtnBgc,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: colors.grayBorder,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  focusedInput: {
    borderColor: colors.primary,
  },
  searchIcon: {
    width: '10%',
  },
  textInput: {
    width: '85%',
    fontSize: 16,
  },
  inputLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightItem: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightItemText: {
    color: colors.primary,
    fontSize: 14,
  },
  headerRight: {
    width: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default s;
