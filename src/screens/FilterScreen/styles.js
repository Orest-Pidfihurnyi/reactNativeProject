import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
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
  filterContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: colors.white,
    marginTop: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
    borderColor: colors.grayBorder,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  locationLeft: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
  },
  locationText: {
    width: '75%',
    fontSize: 16,
    color: colors.primary,
  },
  priceRangeContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default s;
