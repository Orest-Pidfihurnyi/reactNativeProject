import { types } from 'mobx-state-tree';
import { format } from 'date-fns';

export const MessageModel = types
  .model('MessageModel', {
    id: types.identifierNumber,
    chatId: types.number,
    ownerId: types.number,
    text: types.string,
    read: types.boolean,
    createdAt: types.string,
    updatedAt: types.string,
  })
  .views((store) => ({
    getDeliveryTime() {
      return format(new Date(store.createdAt), 'HH.mm');
    },
  }));
