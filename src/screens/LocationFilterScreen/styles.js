import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  main: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: colors.grayForBackground,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
  },
  headerTitle: {
    fontSize: 16,
    color: colors.black,
    fontWeight: '500',
  },
  headerLeft: {
    marginLeft: 0,
  },
  doneButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  submitButton: {
    bottom: 0,
    height: 44,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    fontWeight: '500',
    fontSize: 14,
    color: colors.white,
    textTransform: 'uppercase',
  },
});

export default s;
