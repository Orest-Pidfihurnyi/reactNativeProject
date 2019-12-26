import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const s = StyleSheet.create({
  settingsView: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
  },
  brandSection: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 103,
    backgroundColor: colors.grayForBackground,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },
  brandText: {
    fontSize: 10,
    color: colors.gray,
  },
  settingsCategoriesContainer: {
    backgroundColor: colors.white,
    borderColor: colors.grayBorder,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
  },
  settingsItem: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
  },
  settingsItemText: {
    fontSize: 16,
    color: colors.black,
  },
  hr: {
    height: 1,
    backgroundColor: colors.grayBorder,
  },
  logoutButton: {
    height: 44,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.grayBorder,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
  },
  logoutText: {
    textTransform: 'uppercase',
    fontWeight: '500',
    fontSize: 14,
    color: colors.primary,
  },
});

export default s;
