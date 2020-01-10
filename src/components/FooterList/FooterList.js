import React from 'react';
import { View, ActivityIndicator } from 'react-native';

function FooterList(fetch) {
  if (fetch.isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return null;
}

export default FooterList;
