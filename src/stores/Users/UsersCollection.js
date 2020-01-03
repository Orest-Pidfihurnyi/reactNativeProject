import { createCollection } from '../utils';
import { UserModel } from '../UserModel';

export const UsersCollection = createCollection(UserModel, {});
