import { types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import Api from '../../api';
import { ChatCollectionSchema } from '../schema';
import { ChatModel } from './ChatModel';

export const ChatStore = types
  .model('Chat', {
    items: types.optional(
      types.array(types.reference(ChatModel)),
      [],
    ),

    fetchChats: asyncModel(fetchChats),
  })
  .actions((store) => ({
    runInAction(cb) {
      cb(store);
    },
  }))
  .views((store) => ({
    getChatById(id) {
      return store.items.find((item) => item.id === id);
    },
  }));

function fetchChats() {
  return async function fetchChatsFlow(flow, store) {
    try {
      const res = await Api.Chats.getList();

      const result = flow.merge(res.data, ChatCollectionSchema);

      store.runInAction((self) => {
        self.items = result;
      });
    } catch (err) {
      console.log(err);
    }
  };
}
