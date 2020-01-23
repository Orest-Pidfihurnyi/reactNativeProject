import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { View, Image, Text, FlatList } from 'react-native';
import noMessageIcon from '../../../assets/noMessage.png';
import s from './styles';
import styles from '../../styles/styles';
import { useStore } from '../../stores/createStore';
import ChatItem from './components/ChatItem/ChatItem';

function InboxScreen() {
  const chats = useStore((store) => store.chats);
  const store = useStore();

  useEffect(() => {
    chats.fetchChats.run();
  }, []);

  return store.chats.items.length ? (
    <View style={s.mainContainer}>
      <FlatList
        onRefresh={() => store.chats.fetchChats.run()}
        refreshing={store.chats.fetchChats.isLoading}
        keyExtractor={(item) => item.id.toString()}
        data={store.chats.items.slice()}
        renderItem={({ item, index }) => (
          <ChatItem
            isLast={index === store.chats.items.length - 1}
            item={item}
          />
        )}
      />
      <View style={s.borderBottomLine} />
    </View>
  ) : (
    <View style={s.container}>
      <View style={s.noMessage}>
        <Image source={noMessageIcon} style={s.noMessageIcon} />
        <Text style={s.noMessageText}>No message yet</Text>
      </View>
    </View>
  );
}

InboxScreen.navigationOptions = () => ({
  title: 'Inbox',
  headerStyle: styles.header,
});

InboxScreen.propTypes = {};

export default observer(InboxScreen);
