import React, { useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { observer } from 'mobx-react';
import T from 'prop-types';
import s from './styles';
import Touchable from '../../components/Touchable/Touchable';
import { NavigationService } from '../../services';
import screens from '../../navigation/screens';
import noItems from '../../../assets/noItems.png';
import ProductsList from '../../components/ProductsList/ProductsList';
import { useStore } from '../../stores/createStore';
import UserImage from '../../components/UserImage/UserImage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import colors from '../../styles/colors';
import styles from '../../styles/styles';

function ProfileScreen({ navigation }) {
  const store = useStore();

  const userId = navigation.getParam('userId', store.viewer.user.id);

  useEffect(() => {
    store.ownProducts.fetchOwnProducts.run(userId);
  }, []);

  return (
    <View style={s.container}>
      {userId === store.viewer.user.id ? (
        <CustomHeader isLarge>
          <View style={s.largeHeader}>
            <UserImage
              initials={store.viewer.user.initials}
              style={s.userAvatar}
            />
            <Text style={s.userFullName}>
              {store.viewer.user.fullName}
            </Text>
            <View style={s.headerBottom}>
              <Text style={s.sellerInfo}>
                active: <Text style={s.boldNumber}>145</Text>
              </Text>
              <Text style={[s.sellerInfo, s.sellerInfoMiddle]}>
                sold: <Text style={s.boldNumber}>30</Text>
              </Text>
              <Text style={s.sellerInfo}>
                rating: <Text style={s.boldNumber}>4.7</Text>
              </Text>
            </View>
            <Touchable
              style={s.settingsButton}
              onPress={() =>
                NavigationService.navigate(screens.Settings)
              }
            >
              <Ionicons
                name="md-settings"
                size={32}
                color={colors.gray}
              />
            </Touchable>
            <Touchable
              style={s.backButtonLargeHeader}
              onPress={() => NavigationService.onGoBack()}
            >
              <Ionicons
                name="ios-arrow-back"
                size={32}
                color={colors.gray}
              />
            </Touchable>
          </View>
        </CustomHeader>
      ) : (
        <CustomHeader>
          <View style={s.leftHeaderContainer}>
            <Touchable onPress={() => NavigationService.onGoBack()}>
              <Ionicons
                name="ios-arrow-back"
                size={32}
                color={colors.gray}
              />
            </Touchable>
            <View style={s.headerSmallUserContainer}>
              <UserImage
                initials={
                  store.productOwner.ownerOfProduct
                    ? store.productOwner.ownerOfProduct.initials
                    : 'N N'
                }
                style={s.smallUserAvatar}
                initialsStyle={s.initialsStyle}
              />
              <Text style={s.userFirstName}>
                {store.productOwner.ownerOfProduct.firstName}
              </Text>
            </View>
          </View>
        </CustomHeader>
      )}
      {!store.ownProducts.items.length ? (
        <View style={s.profileContentContainer}>
          <View style={s.noItems}>
            <Image source={noItems} style={s.noItemsImage} />
            <Text style={s.noItemsText}>
              User doesn&apos;t sell anything yet
            </Text>
          </View>
        </View>
      ) : (
        <View style={s.profileContent}>
          {!store.ownProducts.fetchOwnProducts.isLoading ? (
            <ProductsList
              fetchMethod={() =>
                store.ownProducts.fetchOwnProducts.run(userId)
              }
              store={store.ownProducts}
              isLoading={store.ownProducts.fetchOwnProducts.isLoading}
              numColumns={2}
              columnWrapperStyle={s.flatList}
            />
          ) : (
            <View style={styles.fillAll}>
              <ActivityIndicator
                size="large"
                color={colors.primary}
              />
            </View>
          )}
        </View>
      )}
    </View>
  );
}

ProfileScreen.navigationOptions = () => ({
  header: null,
});

ProfileScreen.propTypes = {
  navigation: T.object,
};

export default observer(ProfileScreen);
