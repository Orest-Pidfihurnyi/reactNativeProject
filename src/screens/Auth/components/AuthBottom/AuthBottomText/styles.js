import { StyleSheet } from 'react-native';
import colors from '../../../../../styles/colors';

const s = StyleSheet.create({
  question: {
    fontSize: 14,
    color: colors.gray,
  },
  highlighted: {
    textTransform: 'uppercase',
    fontSize: 14,
    marginLeft: 4,
    color: colors.primary,
  },
});

export default s;
