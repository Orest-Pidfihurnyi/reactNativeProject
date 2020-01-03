import React, { useRef, useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import Touchable from '../../components/Touchable/Touchable';
import styles from '../../styles/styles';
import { NavigationService } from '../../services';
import colors from '../../styles/colors';
import s from './styles';
import Api from '../../api';
import ChoosePriceSection from './components/ChoosePriceSection/ChoosePriceSection';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';
import HeaderRightComponent from '../../components/HeaderRightComponent/HeaderRightComponent';

function CreatePost() {
  const actionRef = useRef();
  const [isFree, setIsFree] = useState(false);
  const [segmentControlIndex, setSegmentControlIndex] = useState(0);
  const [price, setPrice] = useState('');

  async function uploadPhoto(imageUrl) {
    try {
      const form = new FormData();
      // form.append('image', imageUrl);
      form.append('image', {
        image: imageUrl,
      });
      console.log(form);
      const response = await Api.Products.uploadPhoto(form._parts);
      console.log(response);
    } catch (err) {
      console.log('uploadPhotoError', err.response.data);
    }
  }

  async function onOpenCamera() {
    try {
      const res = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
      );
      console.log(res);

      const answer = await ImagePicker.launchCameraAsync({
        width: 300,
        height: 400,
      });
      if (answer.cancelled === false) {
        uploadPhoto(answer.uri);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function onOpenGallery() {
    try {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const answer = await ImagePicker.launchImageLibraryAsync({
        width: 300,
        height: 400,
      });
      if (answer.cancelled === false) {
        uploadPhoto(answer.uri);
      }
    } catch (err) {
      console.log(err);
    }
  }

  function onChoose(index) {
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

  function changePriceHandler(value) {
    setPrice(value);
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={55}
      behavior="padding"
      style={s.container}
    >
      <ScrollView bounces={false}>
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
        <View
          style={[
            s.priceView,
            s.categoryContainer,
            isFree && s.priceViewFree,
          ]}
        >
          <SegmentedControl
            segmentControlIndex={segmentControlIndex}
            setSegmentControlIndex={setSegmentControlIndex}
            isFree={isFree}
            setIsFree={setIsFree}
          />
          {!isFree && segmentControlIndex === 0 ? (
            <ChoosePriceSection
              isFree={isFree}
              price={price}
              changePriceHandler={changePriceHandler}
            />
          ) : null}
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
    </KeyboardAvoidingView>
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
