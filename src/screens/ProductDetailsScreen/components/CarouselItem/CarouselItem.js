import React, { useState } from 'react';
import { View, Image } from 'react-native';
import T from 'prop-types';
import { observer } from 'mobx-react';
import imgNotFound from '../../../../../assets/imgNotFound.png';
import s from './styles';

function CarouselItem({ item }) {
  const [isWrongImagePath, setIsWrongImagePath] = useState(false);

  return (
    <View style={s.container}>
      {item && !isWrongImagePath ? (
        <Image
          source={{ uri: item }}
          style={s.carouselProductImage}
          onError={() => setIsWrongImagePath(true)}
        />
      ) : (
        <Image source={imgNotFound} style={s.carouselProductImage} />
      )}
    </View>
  );
}

CarouselItem.propTypes = {
  item: T.string,
};

export default observer(CarouselItem);
