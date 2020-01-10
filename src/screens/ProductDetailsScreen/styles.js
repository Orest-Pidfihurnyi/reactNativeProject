import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import { headerHeight } from '../../styles/dimensions';

const s = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.grayForBackground,
  },
  headerWithGradient: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  carouselView: {
    height: '70%',
    marginTop: -headerHeight,
  },
  slider: {
    backgroundColor: colors.noColor,
  },
  headerLeft: {
    marginLeft: 0,
    padding: 0,
  },
  LinearGradientContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    paddingTop: 20,
    height: headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  LinearGradientBottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: headerHeight,
    justifyContent: 'space-between',
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
  productInformation: {
    height: '75%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  bottomCarouseLBar: {
    flex: 1,
  },
  productInformationLeft: {
    height: '100%',
    width: '45%',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
  },
  postedTime: {
    color: colors.white,
    opacity: 0.8,
    fontSize: 16,
  },
  locationContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'flex-end',
    height: '55%',
  },
  productLocationText: {
    color: colors.white,
    fontSize: 16,
    opacity: 0.8,
  },
  locationIcon: {
    marginBottom: 2,
  },
  productInformationRight: {
    flexDirection: 'column',
    height: '100%',
    width: '55%',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  productPrice: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  paginationContainer: {
    paddingVertical: 6,
  },
  productDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: colors.black,
  },
  readMoreOrLessButton: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '500',
  },
  descriptionContainer: {
    height: 88,
    width: '100%',
    paddingTop: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
  },
  descriptionScroll: {
    flex: 1,
    paddingBottom: 8,
    borderBottomColor: colors.grayBorder,
    borderBottomWidth: 1,
  },
  userAvatar: {
    height: 48,
    width: 48,
    borderRadius: 48,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ownerContainer: {
    height: 64,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.grayBorder,
  },
  ownerInfo: {
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  ownerName: {
    color: colors.black,
    fontSize: 16,
    lineHeight: 24,
  },
  showMorePostsText: {
    color: colors.blue,
    fontSize: 16,
    lineHeight: 24,
  },
  initialsStyle: {
    fontSize: 20,
  },

  // communication section

  communicationBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 48,
    backgroundColor: colors.blue,
    flexDirection: 'row',
  },
  communicateButton: {
    height: '100%',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButton: {
    backgroundColor: colors.lightGreen,
  },
  messageButton: {
    backgroundColor: colors.lightBlue,
  },
  communicateText: {
    fontSize: 16,
    color: colors.white,
    marginLeft: 8,
  },
});

export default s;
