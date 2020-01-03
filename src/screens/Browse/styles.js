import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  AllScreenView: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: colors.grayForBackground,
  },
  flatList: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default s;
