import React, { useEffect, useState } from 'react';
import { Linking } from 'expo';
import { Entypo, MaterialIcons, Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { observer } from 'mobx-react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Alert,
} from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import NavigationService from '../../services/NavigationService';
import CarouselItem from './components/CarouselItem/CarouselItem';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Touchable from '../../components/Touchable/Touchable';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import colors from '../../styles/colors';
import { useProductCollection } from '../../stores/utils';
import s from './styles';
import { useStore } from '../../stores/createStore';
import { getSimpleTime } from '../../utils';
import { windowParams } from '../../styles/dimensions';
import UserImage from '../../components/UserImage/UserImage';

function ProductDetailsScreen({ navigation }) {
  const store = useStore();
  const productId = navigation.getParam('productId');
  const [slider1ActiveSlide, setSlider1ActiveSlide] = useState(0);

  const collection = useProductCollection();
  const product = collection.get(productId);

  const productDescription =
    product.description || 'There is no description for this product';

  useEffect(() => {
    if (!product) {
      collection.getProduct.run(productId);
    }
  }, []);

  useEffect(() => {
    if (product.id) {
      store.productOwner.fetchOwnerById.run(product.ownerId);
    }
  }, []);

  const productPostDate = getSimpleTime(product.createdAt);

  const productPhotos = product.photos.length
    ? product.photos
    : ['wrongUrl'];

  function handleCallPress() {
    if (store.productOwner.ownerOfProduct.phone) {
      Linking.openURL(
        `tel: ${store.productOwner.ownerOfProduct.phone}`,
      );
    } else {
      Alert.alert(
        "User didn't provide a phone number",
        'Press OK to close alert window',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    }
  }

  function renderViewMore(onPress) {
    return (
      <Touchable onPress={onPress}>
        <Text style={s.readMoreOrLessButton}>Read more...</Text>
      </Touchable>
    );
  }

  function renderViewLess(onPress) {
    return (
      <Touchable onPress={onPress}>
        <Text style={s.readMoreOrLessButton}>Show less</Text>
      </Touchable>
    );
  }

  return (
    <View style={s.main}>
      <View style={s.container}>
        {collection.getProduct.isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <View style={s.carouselView}>
            <Carousel
              data={productPhotos}
              renderItem={({ item, index }) => (
                <CarouselItem item={item} index={index} />
              )}
              containerCustomStyle={s.slider}
              sliderWidth={windowParams.width}
              itemWidth={windowParams.width}
              onSnapToItem={(index) => setSlider1ActiveSlide(index)}
            />
            <LinearGradient
              colors={[
                'rgba(0, 0, 0, 0.0)',
                'rgba(0, 0, 0, 0.1)',
                'rgba(0, 0, 0, 0.2)',
                'rgba(0, 0, 0, 0.3)',
                'rgba(0, 0, 0, 0.4)',
                'rgba(0, 0, 0, 0.5)',
                'rgba(0, 0, 0, 0.6)',
                'rgba(0, 0, 0, 0.7)',
                'rgba(0, 0, 0, 0.8)',
                'rgba(0, 0, 0, 0.9)',
              ]}
              style={s.LinearGradientBottom}
            >
              <View style={s.productInformation}>
                <View style={s.productInformationLeft}>
                  <Text style={s.productTitle}>{product.title}</Text>
                  <View style={s.dataAndLocationInfo}>
                    <Text style={s.postedTime}>
                      {productPostDate}
                    </Text>
                  </View>
                </View>
                <View style={s.productInformationRight}>
                  <Text style={s.productPrice}>${product.price}</Text>
                  <View style={s.locationContainer}>
                    <MaterialIcons
                      name="location-on"
                      style={s.locationIcon}
                      size={16}
                      color={colors.white}
                    />
                    <Text style={s.productLocationText}>
                      {product.location}
                    </Text>
                  </View>
                </View>
              </View>
              <Pagination
                activeDotIndex={slider1ActiveSlide}
                dotStyle={s.dotStyle}
                dotsLength={productPhotos.length}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                containerStyle={s.paginationContainer}
              />
            </LinearGradient>
          </View>
        )}
        <View style={s.descriptionContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={s.descriptionScroll}
            bounces={false}
          >
            <ViewMoreText
              numberOfLines={2}
              renderViewMore={renderViewMore}
              renderViewLess={renderViewLess}
              textStyle={s.readMoreOrLessButton}
            >
              <Text style={s.productDescription}>
                {productDescription}
              </Text>
            </ViewMoreText>
          </ScrollView>
        </View>

        {!store.productOwner.fetchOwnerById.isLoading ? (
          <View style={s.ownerContainer}>
            <UserImage
              style={s.userAvatar}
              initialsStyle={s.initialsStyle}
              initials={
                store.productOwner.ownerOfProduct
                  ? store.productOwner.ownerOfProduct.initials
                  : 'N N'
              }
            />
            <View style={s.ownerInfo}>
              <Text style={s.ownerName}>
                {store.productOwner.ownerOfProduct
                  ? store.productOwner.ownerOfProduct.fullName
                  : 'No Name'}
              </Text>
              <Touchable>
                <Text style={s.showMorePostsText}>
                  {store.productOwner.ownerOfProduct
                    ? `See all ${store.productOwner.ownerOfProduct.firstName}'s posts`
                    : 'See all user posts'}
                </Text>
              </Touchable>
            </View>
          </View>
        ) : (
          <View style={s.ownerContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        )}

        <View style={s.communicationBar}>
          <Touchable
            onPress={handleCallPress}
            style={[s.communicateButton, s.callButton]}
          >
            <Ionicons
              name="ios-call"
              color={colors.white}
              size={16}
            />
            <Text style={s.communicateText}>Call</Text>
          </Touchable>
          <Touchable style={[s.communicateButton, s.messageButton]}>
            <MaterialIcons
              name="message"
              color={colors.white}
              size={16}
            />
            <Text style={s.communicateText}>Message</Text>
          </Touchable>
        </View>
      </View>
    </View>
  );
}

ProductDetailsScreen.navigationOptions = () => ({
  header: (
    <CustomHeader isProductDetails>
      <LinearGradient
        colors={[
          'rgba(0, 0, 0, 0.9)',
          'rgba(0, 0, 0, 0.8)',
          'rgba(0, 0, 0, 0.7)',
          'rgba(0, 0, 0, 0.6)',
          'rgba(0, 0, 0, 0.5)',
          'rgba(0, 0, 0, 0.4)',
          'rgba(0, 0, 0, 0.3)',
          'rgba(0, 0, 0, 0.2)',
          'rgba(0, 0, 0, 0.1)',
          'rgba(0, 0, 0, 0.0)',
        ]}
        style={s.LinearGradientContainer}
      >
        <HeaderBackIcon
          style={s.headerLeft}
          onPress={() => NavigationService.onGoBack()}
        >
          <Ionicons name="ios-close" size={32} color={colors.white} />
        </HeaderBackIcon>

        <Touchable onPress={() => console.log('shared')}>
          <Entypo name="share" size={16} color={colors.white} />
        </Touchable>
      </LinearGradient>
    </CustomHeader>
  ),
});

ProductDetailsScreen.propTypes = {
  navigation: T.object,
};

export default observer(ProductDetailsScreen);
