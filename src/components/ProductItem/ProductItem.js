import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import T from 'prop-types';
import imageNotFound from '../../../assets/imgNotFound.png';
import colors from '../../styles/colors';
import s from './styles';

function ProductItem({ item }) {
  const [isError, setIsError] = useState(false);

  let image = 'wrong url';
  if (item.photos.length) {
    image = item.photos[0] || item.photos[1] || item.photos[2];
  }

  return (
    <View style={s.productContainer}>
      <View style={s.productItem}>
        {item.photos && !isError && (
          <View style={s.imageContainer}>
            <Image
              style={s.productImage}
              source={{
                uri: image,
              }}
              onError={() => setIsError(true)}
            />
          </View>
        )}
        {isError && (
          <View style={s.imageContainer}>
            <Image source={imageNotFound} style={s.productImage} />
          </View>
        )}
        <View style={s.productBottomContainer}>
          <Text style={s.productTitle}>{item.title}</Text>
          <View style={s.productBottom}>
            <Text style={s.productPrice}>{`$${item.price}`}</Text>
            <Feather name="bookmark" size={20} color={colors.gray} />
          </View>
        </View>
      </View>
    </View>
  );
}

ProductItem.propTypes = {
  item: T.object,
};

export default ProductItem;
