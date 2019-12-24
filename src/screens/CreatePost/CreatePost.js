import React, { useRef, useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Touchable from '../../components/Touchable/Touchable';
import styles from '../../styles/styles';
import { NavigationService } from '../../services';
import colors from '../../styles/colors';
import s from './styles';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import HeaderRightComponent from '../../components/HeaderRightComponent/HeaderRightComponent';

function CreatePost() {
  const actionRef = useRef();
  const [isFree, setIsFree] = useState(false);

  async function onOpenCamera() {
    try {
      const res = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
      );
      console.log(res);

      await ImagePicker.launchCameraAsync();
    } catch (err) {
      console.log(err);
    }
  }

  async function onOpenGallery() {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      await ImagePicker.launchImageLibraryAsync();
    } catch (err) {
      console.log(err);
    }
  }

  function onChoose(index) {
    console.log(index);
    if (index === 0) {
      onOpenCamera();
    }
    if (index === 1) {
      onOpenGallery();
    }
  }

  function onOpenActionSheet() {
    actionRef.current.show();
  }

  return (
    <ScrollView style={s.container}>
      <Text style={s.headerOfGroup}>key information</Text>
      <View style={s.textInputWrapper}>
        <CustomTextInput placeholder="Title" />
        <CustomTextInput
          multiline
          placeholder="Description"
          height={s.textAreaInput}
        />
      </View>
      <Text style={s.headerOfGroup}>photos</Text>
      <View style={[s.photosContainer, s.categoryContainer]}>
        <Touchable
          style={s.addPhotoButton}
          onPress={onOpenActionSheet}
        >
          <Feather name="plus" size={32} color={colors.gray} />
        </Touchable>
      </View>
      <Text style={s.headerOfGroup}>price</Text>
      <View style={[s.priceView, s.categoryContainer]}>
        <View style={s.changeCurrency}>
          <Touchable
            style={[
              s.changeCurrencyItem,
              !isFree && s.focusedCurrencyItem,
              s.leftButton,
            ]}
            onPress={() => setIsFree(false)}
          >
            <Text
              style={[
                s.currencyText,
                !isFree && s.focusedCurrencyText,
              ]}
            >
              Price
            </Text>
          </Touchable>
          <Touchable
            style={[
              s.changeCurrencyItem,
              isFree && s.focusedCurrencyItem,
              s.rightButton,
            ]}
            onPress={() => setIsFree(true)}
          >
            <Text
              style={[
                s.currencyText,
                isFree && s.focusedCurrencyText,
              ]}
            >
              Free
            </Text>
          </Touchable>
        </View>
        <View style={s.hr} />
        <CustomTextInput placeholder="Enter price" rightText="uah" />
      </View>
      <Text style={s.headerOfGroup}>location</Text>
      <Touchable style={s.locationContainer}>
        <View style={s.locationLeft}>
          <MaterialIcons
            name="location-on"
            size={32}
            color={colors.primary}
          />
          <Text style={s.locationText}>Location</Text>
        </View>

        <View style={s.locationRight}>
          <Ionicons
            name="ios-arrow-forward"
            size={32}
            color={colors.primary}
          />
        </View>
      </Touchable>

      <ActionSheet
        ref={actionRef}
        title="Choose directory"
        options={['Camera', 'Gallary', 'Cancel']}
        cancelButtonIndex={2}
        destructiveButtonIndex={2}
        onPress={onChoose}
      />
    </ScrollView>
  );
}

CreatePost.navigationOptions = () => ({
  title: 'Create Post',
  headerStyle: styles.header,
  headerLeft: (props) => (
    <HeaderBackIcon
      {...props}
      onPress={() => NavigationService.onGoBack()}
    >
      <Ionicons name="ios-close" size={32} color={colors.primary} />
    </HeaderBackIcon>
  ),
  headerRight: (
    <HeaderRightComponent>
      <Text style={styles.headerRightCreatePost}>Post</Text>
    </HeaderRightComponent>
  ),
});

export default CreatePost;
