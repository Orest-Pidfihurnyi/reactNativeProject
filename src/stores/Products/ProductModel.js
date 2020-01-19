import { types, getRoot, getSnapshot } from 'mobx-state-tree';
import { UserModel } from '../UserModel';
import { safeReference, asyncModel } from '../utils';
import Api from '../../api';
import { ChatSchema } from '../schema';

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifierNumber,
    ownerId: types.number,
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.string,
    price: types.number,
    saved: false,
    createdAt: types.string,
    updatedAt: types.string,
    chatId: types.maybeNull(types.number),
    owner: types.maybe(safeReference(types.late(() => UserModel))),

    createChat: asyncModel(createChat, false),
  })
  .preProcessSnapshot((snapshot) => ({
    ...snapshot,
    owner: snapshot.ownerId,
  }))
  .actions((store) => ({
    fetchOwner() {
      getRoot(store).entities.users.getById.run(store.ownerId);
    },
    setSaved() {
      store.saved = !store.saved;
    },
  }))
  .views((store) => ({
    getShortDescription() {
      return `${store.description.slice(0, 17)}...`;
    },
  }));

function createChat(message) {
  return async function createChatFlow(flow, store) {
    let chatId;

    try {
      flow.start();

      const res = await Api.Chats.createChat(store.id, message);
      chatId = res.data.id;

      res.data.participants = [getSnapshot(store.owner)];
      flow.merge(res.data, ChatSchema);

      flow.success();
    } catch (err) {
      console.log('creatingChat', err);
      flow.error(err);
      throw err;
    }
    return chatId;
  };
}
