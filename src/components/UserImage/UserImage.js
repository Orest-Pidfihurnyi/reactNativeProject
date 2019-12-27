import React from 'react';
import { Image } from 'react-native';
import T from 'prop-types';
import noFound from '../../../assets/imgNotFound.png';
import { useStore } from '../../stores/createStore';

function UserImage({ style }) {
  const { avatar } = useStore((store) => store.viewer.user);

  return <Image source={avatar || noFound} style={style} />;
}

UserImage.propTypes = {
  style: T.object,
};

export default UserImage;
