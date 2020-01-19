import React, { useEffect } from 'react';
import T from 'prop-types';
import { View, Image, Text } from 'react-native';
import { observer } from 'mobx-react';
import s from './styles';
import { useStore } from '../../../../stores/createStore';
import Touchable from '../../../../components/Touchable/Touchable';
import {
  useProductCollection,
  useUserCollection,
} from '../../../../stores/utils';
import UserImage from '../../../../components/UserImage/UserImage';
import { NavigationService } from '../../../../services';
import screens from '../../../../navigation/screens';

function ChatItem({ item, isLast }) {
  const store = useStore();
  const productCollection = useProductCollection();
  const product = productCollection.get(item.productId) || {};
  const usersCollection = useUserCollection();
  const user = usersCollection.get(item.ownerId) || {};
  const ownerOfProduct = usersCollection.get(product.ownerId) || {};

  let productImage = 'wrong';
  if (product.photos && product.photos.length) {
    productImage =
      product.photos[0] || product.photos[1] || product.photos[2];
  }

  useEffect(() => {
    store.entities.products.getProduct.run(item.productId);
    store.entities.users.getUserById.run(user.id);
  }, []);

  return (
    <Touchable
      onPress={() =>
        NavigationService.navigate(screens.Chat, { chatId: item.id })
      }
      style={s.chatItemContainer}
    >
      <View style={s.chatItemLeftContainer}>
        <View>
          <Image
            source={{ uri: productImage }}
            style={s.productImage}
          />
          <UserImage
            style={s.userAvatar}
            initialsStyle={s.initialsStyle}
            initials={ownerOfProduct.initials || 'N N'}
          />
        </View>
      </View>
      <View
        style={[s.chatItemRightContainer, !isLast && s.withBorder]}
      >
        <View style={s.chatLeft}>
          <Text style={s.productTitle}>{product.title}</Text>
          <Text style={s.interlocutor}>{user.fullName}</Text>
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
