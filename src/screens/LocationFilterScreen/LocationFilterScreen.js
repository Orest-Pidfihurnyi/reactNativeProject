import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import T from 'prop-types';
import { Text, ScrollView, View, FlatList } from 'react-native';
import NavigationService from '../../services/NavigationService';
import CustomHeader from '../../components/CustomHeader/CustomHeader';
import Touchable from '../../components/Touchable/Touchable';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import CategoryElement from './components/CategoryInput/CategoryElement';
import colors from '../../styles/colors';
import s from './styles';
import { useStore } from '../../stores/createStore';
import ukrainianRegionsForList from '../../ukrainian_regions';

function LocationFilterScreen({ navigation }) {
  const store = useStore();
  const navigatedFrom = navigation.getParam('navigatedFrom', '');

  function handleChoose(region) {
    if (navigatedFrom === 'CreatePost') {
      store.productsLocationStore.setLocation(region);
      NavigationService.navigateToCreatePost();
    }
  }

  return (
    <View style={s.main}>
      <CustomHeader>
        <HeaderBackIcon
          style={s.headerLeft}
          onPress={() => NavigationService.onGoBack()}
        >
          <Ionicons
            name="ios-close"
            size={46}
            color={colors.primary}
          />
        </HeaderBackIcon>
        <View>
          <Text style={s.headerTitle}>Filter</Text>
        </View>
        <Touchable onPress={() => console.log('closeLocationFilter')}>
          <Text style={s.doneButtonText}>Done</Text>
        </Touchable>
      </CustomHeader>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={ukrainianRegionsForList}
          keyExtractor={({ name }) => name}
          renderItem={({ item }) => (
            <CategoryElement
              locationElement={item.name}
              onPress={handleChoose}
            />
          )}
        />
      </ScrollView>
      <Touchable style={s.submitButton}>
        <Text style={s.submitText}>Show Results</Text>
      </Touchable>
    </View>
  );
}

LocationFilterScreen.navigationOptions = () => ({
  header: null,
});

LocationFilterScreen.propTypes = {
  navigation: T.object,
};

export default LocationFilterScreen;
