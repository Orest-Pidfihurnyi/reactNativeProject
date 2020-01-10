import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { observer } from 'mobx-react';
import { Foundation } from '@expo/vector-icons';
import T from 'prop-types';
import imageNotFound from '../../../assets/imgNotFound.png';
import colors from '../../styles/colors';
import Touchable from '../Touchable/Touchable';
import s from './styles';
import { useStore } from '../../stores/createStore';
import { NavigationService } from '../../services';
import screens from '../../navigation/screens';

function ProductItem({ item }) {
  const store = useStore();

  const [isError, setIsError] = useState(false);
  const [isSaved, setIsSaved] = useState(item.saved);

  let image = 'wrong url';
  if (item.photos && item.photos.length) {
    if (item.photos[0]) {
      [image] = item.photos;
    }
  }

  function handleChangeSaved(id) {
    if (item.ownerId === store.viewer.user.id) {
      Alert.alert(
        "You can't add own product to saved",
        'Press OK to close alert window',
        [
          {
            text: 'OK',
            onPress: () => {},
          },
        ],
      );
    } else if (isSaved) {
      store.savedProducts.removeFromSaved(id);
      setIsSaved(!isSaved);
      item.setSaved();
    } else {
      store.savedProducts.addToSaved(id);
      setIsSaved(!isSaved);
      item.setSaved();
    }
  }

  return (
    <View style={s.productContainer}>
      <View style={s.productItem}>
        {item.photos && item.photos.length && !isError ? (
          <Touchable
            onPress={() =>
              NavigationService.navigate(screens.ProductDetails, {
                productId: `${item.id}`,
              })
            }
            style={s.imageContainer}
          >
            <Image
              defaultSource={imageNotFound}
              style={s.productImage}
              source={{
                uri: image,
              }}
              onError={() => setIsError(true)}
            />
          </Touchable>
        ) : (
          <Touchable
            onPress={() =>
              NavigationService.navigate(screens.ProductDetails, {
                productId: item.id,
              })
            }
            style={s.imageContainer}
          >
            <Image source={imageNotFound} style={s.productImage} />
          </Touchable>
        )}
        <View style={s.productBottomContainer}>
          <Text style={s.productTitle}>{item.title}</Text>
          <View style={s.productBottom}>
            <Text style={s.productPrice}>{`$${item.price}`}</Text>
            <Touchable onPress={() => handleChangeSaved(item.id)}>
              <Foundation
                name="bookmark"
                size={20}
                color={item.saved ? colors.primary : colors.gray}
              />
            </Touchable>
          </View>
        </View>
      </View>
    </View>
  );
}

ProductItem.propTypes = {
  item: T.object,
};

export default observer(ProductItem);
