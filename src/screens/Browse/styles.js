import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    backgroundColor: colors.grayForBackground,
  },
  flatList: {
    justifyContent: 'space-between',
  },
});

export default s;
