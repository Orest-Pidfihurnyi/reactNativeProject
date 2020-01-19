import { createCollection, asyncModel } from '../utils';
import { UserModel } from '../UserModel';
import Api from '../../api';
import { User } from '../schema';

export const UsersCollection = createCollection(UserModel, {
  getUserById: asyncModel(getUser),
});

function getUser(id) {
  return async function getUserFlow(flow) {
    try {
      const res = await Api.Account.getUserById(id);
      flow.merge(res.data, User);
    } catch (err) {
      console.log('getUserById error', err);
    }
  };
}
