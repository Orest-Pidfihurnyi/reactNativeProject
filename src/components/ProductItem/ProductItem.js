import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { observer } from 'mobx-react';
import { Foundation } from '@expo/vector-icons';
import T from 'prop-types';
import imageNotFound from '../../../assets/imgNotFound.png';
import colors from '../../styles/colors';
import Touchable from '../Touchable/Touchable';
import s from './styles';
import { useStore } from '../../stores/createStore';

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
    if (isSaved) {
      setIsSaved(!isSaved);
      item.setSaved();
      store.savedProducts.removeFromSaved(id);
    } else {
      setIsSaved(!isSaved);
      item.setSaved();
      store.savedProducts.addToSaved(id);
    }
  }

  return (
    <View style={s.productContainer}>
      <View style={s.productItem}>
        {item.photos && item.photos.length && !isError ? (
          <View style={s.imageContainer}>
            <Image
              defaultSource={imageNotFound}
              style={s.productImage}
              source={{
                uri: image,
              }}
              onError={() => setIsError(true)}
            />
          </View>
        ) : (
          <View style={s.imageContainer}>
            <Image source={imageNotFound} style={s.productImage} />
          </View>
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
