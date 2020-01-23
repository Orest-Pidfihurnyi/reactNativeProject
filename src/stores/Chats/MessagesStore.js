import { types, getParent } from 'mobx-state-tree';
import { MessageModel } from './MessageModel';
import { asyncModel } from '../utils';
import { MessageSchema, MessageCollectionSchema } from '../schema';
import Api from '../../api';

export const MessagesStore = types
  .model('MessagesStore', {
    items: types.array(types.reference(MessageModel)),

    sendMessage: asyncModel(sendMessage),
    fetch: asyncModel(fetchMessages),
  })
  .views((store) => ({
    get asList() {
      return store?.items?.slice() || [];
    },

    get chatId() {
      return getParent(store).id;
    },
  }))
  .actions((store) => ({
    runInAction(cb) {
      cb(store);
    },
  }));

function fetchMessages(id) {
  return async function fetchMessagesFlow(flow, store) {
    try {
      const res = await Api.Chats.getMessages(id);

      const results = flow.merge(res.data, MessageCollectionSchema);
      store.runInAction((self) => {
        self.items = results;
      });
    } catch (e) {
      console.log(e);
    }
  };
}

function sendMessage(id, message) {
  return async function sendMessageFlow(flow, store) {
    try {
      const res = await Api.Chats.sendMessage(id, message);

      const result = flow.merge(res.data, MessageSchema);

      store.runInAction((self) => {
        self.items.unshift(result);
      });
    } catch (e) {
      console.log(e);
    }
  };
}
