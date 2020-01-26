import React, { useEffect, useState, useRef } from 'react';
import T from 'prop-types';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import {
  View,
  Image,
  Text,
  FlatList,
  TextInput,
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
import photoNotFound from '../../../../../assets/imgNotFound.png';
import styles from '../../../../styles/styles';
import noMessages from '../../../../../assets/noMessage.png';
import {
  useProductCollection,
  useUserCollection,
} from '../../../../stores/utils';

function ChatView({ navigation }) {
  const chatId = navigation.getParam('chatId', null);
  const productId = navigation.getParam('productId');
  const interlocutorId = navigation.getParam('interlocutorId');
  const chat = chatId
    ? useStore((store) => store.chats.getChatById(+chatId))
    : null;
  const store = useStore();

  const flatListRef = useRef();

  useEffect(() => {
    store.entities.products.getProduct.run(productId);
    store.entities.users.getUserById.run(interlocutorId);
  }, []);

  useEffect(() => {
    if (chatId) {
      chat.messages.fetch.run(+chatId);
    }
  }, [chatId]);

  const productCollection = useProductCollection();
  const product = productCollection.get(productId) || {};

  const userCollection = useUserCollection();
  const interlocutor = userCollection.get(interlocutorId);

  const [isPhotoError, setIsPhotoError] = useState(false);
  let productImage = 'wrong';
  if (product.photos && product.photos.length) {
    productImage =
      product.photos[0] || product.photos[1] || product.photos[2];
  }

  const [message, setMessage] = useState('');

  async function handleSendMessage() {
    try {
      if (chatId && message) {
        chat.messages.sendMessage.run(chatId, message);
      } else {
        const createdChatId = await product.createChat.run(message);
        console.log(createdChatId);

        navigation.setParams({ chatId: createdChatId });
      }
      setMessage('');
    } catch (e) {
      console.log('creating chat error', e);
    }
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
              initials={interlocutor ? interlocutor.initials : 'N N'}
              style={s.smallUserAvatar}
              initialsStyle={s.initialsStyle}
            />
            <Text style={s.userFirstName}>
              {interlocutor ? interlocutor.firstName : 'no name'}
            </Text>
          </View>
        </View>
      </CustomHeader>
      <View style={s.productContainer}>
        <Touchable
          onPress={() =>
            NavigationService.navigate(screens.ProductDetails, {
              productId,
            })
          }
          style={s.chatItemContainer}
        >
          <View style={s.chatItemLeftContainer}>
            <View>
              {isPhotoError ? (
                <Image
                  source={photoNotFound}
                  style={s.productImage}
                />
              ) : (
                <Image
                  source={{ uri: productImage }}
                  style={s.productImage}
                  onError={() => setIsPhotoError(true)}
                />
              )}
            </View>
          </View>
          <View style={s.productRightContainer}>
            <View style={s.chatLeft}>
              <Text style={s.productTitle}>{product.title}</Text>
              <Text style={s.productDescription}>
                {product.description.length > 40
                  ? `${product.description.slice(0, 37)}...`
                  : product.description}
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
        {chat && chat.messages.items.length ? (
          <FlatList
            ref={flatListRef}
            showsVerticalScrollIndicator={false}
            refreshing={chat.messages.fetch.isLoading}
            onRefresh={() => chat.messages.fetch.run()}
            style={s.flatList}
            inverted
            onContentSizeChange={() =>
              setTimeout(
                () =>
                  flatListRef.current.scrollToItem(
                    chat.messages.items[
                      chat.messages.items.length - 1
                    ],
                  ),
                200,
              )
            }
            data={chat.messages.items}
            renderItem={({ item }) => (
              <MessageItem
                message={item}
                isRight={item.ownerId === store.viewer.user.id}
              />
            )}
            keyExtractor={(item) => `${item.id}`}
            ListEmptyComponent={
              <View style={s.containerNoMessages}>
                <Image source={noMessages} />
                <Text style={s.textNoMessages}>No messages yet</Text>
              </View>
            }
          />
        ) : (
          <View style={styles.fillAll} />
        )}

        <View style={s.footer}>
          <View style={s.messageInputContainer}>
            <TextInput
              placeholder="Message..."
              value={message}
              style={s.textInput}
              onChangeText={setMessage}
            />
          </View>
          <Touchable onPress={handleSendMessage}>
            <Ionicons
              name="md-send"
              size={24}
              color={colors.primary}
            />
          </Touchable>
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
