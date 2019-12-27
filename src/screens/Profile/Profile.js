import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import { NavigationService } from '../../services';
import screens from '../../navigation/screens';
import UserImage from '../../components/UserImage/UserImage';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

function ProfileScreen() {
  const [isLarge, setIsLarge] = useState(true);

  return (
    <View style={s.container}>
      <Text>ProfileScreen</Text>
      <Button
        title="go to Settings"
        onPress={() => NavigationService.navigate(screens.Settings)}
      />
    </View>
  );
}

ProfileScreen.navigationOptions = () => ({
  header: (
    <CustomHeader isProfile>
      <View style={s.largeHeader}>
        <View style={s.largeHeaderTop}>
          <UserImage style={s.userAvatar} />
          <Text>{}</Text>
        </View>
      </View>
    </CustomHeader>
  ),
});

ProfileScreen.propTypes = {};

export default ProfileScreen;
