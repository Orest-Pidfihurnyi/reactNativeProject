import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 8,
    backgroundColor: colors.grayForBackground,
  },
  activityIndicator: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    justifyContent: 'space-between',
  },
});

export default s;
