import { types, getParent, getRoot } from 'mobx-state-tree';
import { normalize } from 'normalizr';
import { MessageModel } from './MessageModel';
import { asyncModel } from '../utils';
import { MessageSchema, MessageCollectionSchema } from '../schema';
import Api from '../../api';

export const MessagesStore = types
  .model('MessagesStore', {
    items: types.array(types.reference(MessageModel)),

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
    addMessage(message) {
      const { entities, result } = normalize(message, MessageSchema);
      getRoot(store).entities.merge(entities);

      store.items.unshift(result);
    },
  }));

function fetchMessages(id) {
  return async function fetchMessagesFlow(flow, store) {
    try {
      const res = await Api.Chats.getMessages(id);
      console.log(res);

      const results = flow.merge(res.data, MessageCollectionSchema);
      store.runInAction((self) => {
        self.items = results;
      });
    } catch (e) {
      console.log(e);
    }
  };
}
