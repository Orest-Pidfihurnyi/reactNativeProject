import React, { useRef, useEffect, useState } from 'react';
import {
  Text,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';
import { observer } from 'mobx-react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import { Linking } from 'expo';
import { Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Touchable from '../../components/Touchable/Touchable';
import { NavigationService } from '../../services';
import colors from '../../styles/colors';
import s from './styles';
import { getMimeType } from '../../utils';
import Api from '../../api';
import { useStore } from '../../stores/createStore';
import ChoosePriceSection from './components/ChoosePriceSection/ChoosePriceSection';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';
import screens from '../../navigation/screens';

function CreatePost() {
  const store = useStore();

  const actionRef = useRef();
  const [isFree, setIsFree] = useState(false);

  const [productPrice, setProductPrice] = useState('');
  const [productTitle, setProductTitle] = useState('');
  const [isPhotoLoading, setIsPhotoLoading] = useState(false);
  const [productDescription, setProductDescription] = useState('');
  const [productLocation, setProductLocation] = useState('');
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setProductLocation(
      store.productsLocationStore.locationForCreatingPost,
    );
  }, [store.productsLocationStore.locationForCreatingPost]);

  async function onSubmit(
    title,
    description,
    photosArr,
    price,
    locationProduct,
  ) {
    if (!title && !description && !productLocation) {
      Alert.alert(
        'FIll valid data',
        'Press OK to close alert window',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    } else {
      const actualPrice = isFree ? 0 : price || 0;

      await Api.Products.uploadProduct(
        title,
        description,
        photosArr,
        actualPrice,
        locationProduct,
      );

      NavigationService.navigate(screens.Browse);
    }
  }

  async function uploadPhoto(imageUrl) {
    const mimeType = getMimeType(imageUrl);
    setIsPhotoLoading(true);

    try {
      const response = await Api.Products.uploadPhoto(
        imageUrl,
        mimeType,
      );

      setPhotos([...photos, response.data]);
      setIsPhotoLoading(false);
    } catch (err) {
      console.log('uploadPhotoError', err.response.data);
    }
  }

  async function onOpenCamera() {
    try {
      await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
      );

      const answer = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
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
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
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
    setProductPrice(value);
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={s.container}>
      <CustomHeader isCreatingPost>
        <Touchable onPress={() => NavigationService.onGoBack()}>
          <Ionicons
            name="ios-close"
            size={32}
            color={colors.primary}
          />
        </Touchable>
        <View>
          <Text style={s.headerTitle}>New Post</Text>
        </View>
        <Touchable
          onPress={() =>
            onSubmit(
              productTitle,
              productDescription,
              photos,
              productPrice,
              productLocation,
            )
          }
        >
          <Text style={s.postButtonText}>Post</Text>
        </Touchable>
      </CustomHeader>

      <ScrollView style={s.fillAll} bounces={false}>
        <Text style={s.headerOfGroup}>key information</Text>
        <View style={s.textInputWrapper}>
          <CustomTextInput
            placeholder="Title"
            value={productTitle}
            onChangeText={setProductTitle}
          />
          <CustomTextInput
            multiline
            placeholder="Description"
            height={s.textAreaInput}
            value={productDescription}
            onChangeText={setProductDescription}
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
          {!!photos.length &&
            photos.map((imgUrl) => (
              <Touchable
                key={imgUrl}
                style={s.imageButtonLinking}
                onPress={() => Linking.openURL(imgUrl)}
              >
                <Image
                  style={s.imageStyles}
                  source={{ uri: imgUrl }}
                />
              </Touchable>
            ))}
          {isPhotoLoading && (
            <View style={s.photoLoadingIndicatorContainer}>
              <ActivityIndicator
                size="small"
                color={colors.primary}
              />
            </View>
          )}
        </View>
        <Text style={s.headerOfGroup}>price</Text>
        <View
          style={[
            s.priceView,
            s.categoryContainer,
            isFree && s.priceViewFree,
          ]}
        >
          <SegmentedControl isFree={isFree} setIsFree={setIsFree} />
          {!isFree && (
            <ChoosePriceSection
              isFree={isFree}
              price={productPrice}
              changePriceHandler={changePriceHandler}
            />
          )}
        </View>
        <Text style={s.headerOfGroup}>location</Text>
        <Touchable
          style={s.locationContainer}
          onPress={() =>
            NavigationService.navigate(screens.LocationFilter, {
              navigatedFrom: 'CreatePost',
            })
          }
        >
          <View style={s.locationLeft}>
            <MaterialIcons
              name="location-on"
              size={32}
              color={colors.primary}
            />
            <Text style={s.locationText}>
              {store.productsLocationStore.locationForCreatingPost ||
                'Location'}
            </Text>
          </View>

          <View style={s.locationRight}>
            <Ionicons
              name="ios-arrow-forward"
              size={32}
              color={colors.primary}
            />
          </View>
        </Touchable>
      </ScrollView>
      <ActionSheet
        ref={actionRef}
        title="Choose directory"
        options={['Camera', 'Gallery', 'Cancel']}
        cancelButtonIndex={2}
        destructiveButtonIndex={2}
        onPress={onChoose}
      />
    </KeyboardAvoidingView>
  );
}

CreatePost.navigationOptions = () => ({
  header: null,
});

export default observer(CreatePost);
