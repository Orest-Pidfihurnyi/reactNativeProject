import { types } from 'mobx-state-tree';
import { format } from 'date-fns';
import { ProductModel } from '../Products/ProductModel';
import { UserModel } from '../UserModel';
import { MessageModel } from './MessageModel';
import { MessagesStore } from './MessagesStore';

export const ChatModel = types
  .model('Chat', {
    id: types.identifierNumber,
    productId: types.number,
    ownerId: types.number,
    createdAt: types.string,
    updatedAt: types.string,
    message: types.reference(MessageModel),
    product: types.reference(ProductModel),
    user: types.reference(UserModel),

    messages: types.optional(MessagesStore, {}),
  })
  .preProcessSnapshot((snapshot) => {
    if (typeof snapshot !== 'object') {
      return snapshot;
    }

    if (typeof snapshot.participants === 'undefined') {
      console.log(snapshot);
      return snapshot;
    }

    return {
      ...snapshot,
      product: snapshot.product || snapshot.productId,
      participants: undefined,
      user: snapshot.participants[0],
    };
  })
  .views((store) => ({
    getDate() {
      return format(new Date(store.createdAt), 'd/LL');
    },
  }));
