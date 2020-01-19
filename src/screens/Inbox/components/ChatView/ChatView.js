import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  View,
  Image,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import { observer } from 'mobx-react';
import { useStore } from '../../../../stores/createStore';
import s from './styles';
import CustomHeader from '../../../../components/CustomHeader/CustomHeader';
import { NavigationService } from '../../../../services';
import colors from '../../../../styles/colors';
import UserImage from '../../../../components/UserImage/UserImage';
import Touchable from '../../../../components/Touchable/Touchable';
import screens from '../../../../navigation/screens';
import MessageItem from './components/MessageItem/MessageItem';

function ChatView({ navigation }) {
  const chatId = navigation.getParam('chatId');
  const chat = useStore((store) => store.chats.getChatById(+chatId));
  const store = useStore();

  let productImage = 'wrong';
  if (chat.product.photos && chat.product.photos.length) {
    productImage =
      chat.product.photos[0] ||
      chat.product.photos[1] ||
      chat.product.photos[2];
  }

  useEffect(() => {
    if (chatId) {
      chat.messages.fetch.run(+chatId);
      store.entities.products.getProduct.run(chat.productId);
      store.entities.users.getUserById.run(chat.ownerId);
    }
  }, []);

  const [message, setMessage] = useState('');
  function handleChange(value) {
    setMessage(value);
  }

  return (
    <View style={s.mainChatView}>
      <CustomHeader>
        <View style={s.leftHeaderContainer}>
          <Touchable
            onPress={() => NavigationService.navigate(screens.Inbox)}
          >
            <Ionicons
              name="ios-arrow-back"
              size={32}
              color={colors.gray}
            />
          </Touchable>
          <View style={s.headerSmallUserContainer}>
            <UserImage
              initials={chat.user ? chat.user.initials : 'N N'}
              style={s.smallUserAvatar}
              initialsStyle={s.initialsStyle}
            />
            <Text style={s.userFirstName}>{chat.user.firstName}</Text>
          </View>
        </View>
      </CustomHeader>
      <View style={s.productContainer}>
        <Touchable
          onPress={() =>
            NavigationService.navigate(screens.ProductDetails, {
              productId: chat.product.id,
            })
          }
          style={s.chatItemContainer}
        >
          <View style={s.chatItemLeftContainer}>
            <View>
              <Image
                source={{ uri: productImage }}
                style={s.productImage}
              />
            </View>
          </View>
          <View style={s.productRightContainer}>
            <View style={s.chatLeft}>
              <Text style={s.productTitle}>{chat.product.title}</Text>
              <Text style={s.productDescription}>
                {chat.product.description.length > 40
                  ? `${chat.product.description.slice(0, 37)}...`
                  : chat.product.description}
              </Text>
            </View>
            <View style={s.arrowRightIcon}>
              <FontAwesome
                name="chevron-right"
                size={18}
                color={colors.grayBorder}
              />
            </View>
          </View>
        </Touchable>
      </View>
      <KeyboardAvoidingView behavior="padding" style={s.main}>
        {!!chat.messages.items.length && (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={s.scrollView}
            data={chat.messages.items}
            renderItem={({ item, index }) => (
              <MessageItem
                message={item.text}
                isRight={item.ownerId === store.viewer.user.id}
                isLast={chat.messages.items.length === index - 1}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
          />
        )}

        <View style={s.footer}>
          <View style={s.messageInputContainer}>
            <TextInput
              placeholder="Message..."
              value={message}
              style={s.textInput}
              onChangeText={handleChange}
            />
          </View>
          <Ionicons name="md-send" size={24} color={colors.primary} />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

ChatView.propTypes = {
  navigation: T.object,
};

ChatView.navigationOptions = {
  header: null,
  tabBarVisible: false,
};

export default observer(ChatView);
