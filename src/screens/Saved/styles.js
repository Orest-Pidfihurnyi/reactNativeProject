import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  allScreenView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
    paddingHorizontal: 8,
  },
  noSavedProductsView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItemsImage: {
    height: 128,
    width: 128,
  },
  noItemsText: {
    fontSize: 16,
    color: colors.gray,
  },
  flatList: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default s;
