import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import { observer } from 'mobx-react';
import T from 'prop-types';
import s from './styles';
import FoundElement from './components/FoundElement/FoundElement';
import { NavigationService } from '../../services';
import screens from '../../navigation/screens';

function AbsoluteSearchView({ items, setSearchStr }) {
  function handleItemClick(itemId) {
    NavigationService.navigate(screens.ProductDetails, {
      productId: itemId,
    });
    setSearchStr('');
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={s.absoluteSearchView}
    >
      {!!items.length && (
        <FlatList
          data={items}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <FoundElement item={item} onPress={handleItemClick} />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </ScrollView>
  );
}

AbsoluteSearchView.propTypes = {
  items: T.array,
  setSearchStr: T.func,
};

export default observer(AbsoluteSearchView);
