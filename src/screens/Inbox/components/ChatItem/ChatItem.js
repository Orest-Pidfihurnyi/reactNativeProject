import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import { View, Image, Text } from 'react-native';
import { observer } from 'mobx-react';
import s from './styles';
import { useStore } from '../../../../stores/createStore';
import Touchable from '../../../../components/Touchable/Touchable';
import { useProductCollection } from '../../../../stores/utils';
import UserImage from '../../../../components/UserImage/UserImage';
import { NavigationService } from '../../../../services';
import notFound from '../../../../../assets/imgNotFound.png';
import screens from '../../../../navigation/screens';

function ChatItem({ item, isLast }) {
  const store = useStore();
  const productCollection = useProductCollection();
  const product = productCollection.get(item.productId) || {};

  const [isProductPhotoError, setIsProductPhotoError] = useState(
    false,
  );

  let productImage = 'wrong';
  if (product.photos && product.photos.length) {
    productImage =
      product.photos[0] || product.photos[1] || product.photos[2];
  }

  useEffect(() => {
    store.entities.products.getProduct.run(item.productId);
    store.entities.users.getUserById.run(item.product.ownerId);
  }, []);

  return (
    <Touchable
      onPress={() =>
        NavigationService.navigate(screens.Chat, {
          chatId: item.id,
          interlocutorId: item.user.id,
          productId: item.productId,
        })
      }
      style={s.chatItemContainer}
    >
      <View style={s.chatItemLeftContainer}>
        <View>
          {!isProductPhotoError ? (
            <Image
              source={{ uri: productImage }}
              style={s.productImage}
              onError={() => setIsProductPhotoError(true)}
            />
          ) : (
            <Image source={notFound} style={s.productImage} />
          )}

          <UserImage
            style={s.userAvatar}
            initialsStyle={s.initialsStyle}
            initials={item.user.initials || 'N N'}
          />
        </View>
      </View>
      <View
        style={[s.chatItemRightContainer, !isLast && s.withBorder]}
      >
        <View style={s.chatLeft}>
          <Text style={s.productTitle}>{product.title}</Text>
          <Text style={s.interlocutor}>{item.user.fullName}</Text>
          <Text style={s.message}>{item.message.text}</Text>
        </View>
        <View style={s.dateAndCounter}>
          <Text style={s.date}>{item.getDate()}</Text>
        </View>
      </View>
    </Touchable>
  );
}

ChatItem.propTypes = {
  item: T.object,
  isLast: T.bool,
};

export default observer(ChatItem);
