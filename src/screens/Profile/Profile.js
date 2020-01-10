import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import s from './styles';
import Touchable from '../../components/Touchable/Touchable';
import { NavigationService } from '../../services';
import screens from '../../navigation/screens';
import noItems from '../../../assets/noItems.png';
import { useStore } from '../../stores/createStore';
import UserImage from '../../components/UserImage/UserImage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import colors from '../../styles/colors';

function ProfileScreen() {
  const [isLarge, setIsLarge] = useState(true);
  const store = useStore();

  return (
    <View style={s.container}>
      <CustomHeader isProfile>
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
              size={24}
              color={colors.gray}
            />
          </Touchable>
        </View>
      </CustomHeader>
      <View style={s.profileContentContainer}>
        <View style={s.noItems}>
          <Image source={noItems} style={s.noItemsImage} />
          <Text style={s.noItemsText}>
            User doesn&apos;t sell anything yet
          </Text>
        </View>
      </View>
    </View>
  );
}

ProfileScreen.navigationOptions = () => ({
  header: null,
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
