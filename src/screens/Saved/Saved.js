import React from 'react';
import { View, Text, Button } from 'react-native';
import s from './styles';
import NavigationService from '../../services/NavigationService';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import SearchInput from '../../components/SearchInput/SearchInput';

function SavedScreen() {
  return (
    <View style={s.container}>
      <Text>SavedScreen</Text>
      <Button
        title="Go to registration"
        onPress={() => NavigationService.navigateToRegistration()}
      />
    </View>
  );
}

SavedScreen.navigationOptions = () => ({
  header: (
    <CustomHeader>
      <SearchInput />
    </CustomHeader>
  ),
});

SavedScreen.propTypes = {};

export default SavedScreen;
