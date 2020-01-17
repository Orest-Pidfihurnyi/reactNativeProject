import React from 'react';
import { FlatList } from 'react-native';
import T from 'prop-types';
import s from './styles';
import FilterElement from './components/FilterElement/FilterElement';

function Dropdown({ items, onChoose }) {
  return (
    !!items.length && (
      <FlatList
        data={items}
        style={s.absoluteDropDown}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <FilterElement item={item} onPress={onChoose} />
        )}
        keyExtractor={(item) => item}
      />
    )
  );
}

Dropdown.propTypes = {
  items: T.array,
  onChoose: T.func,
};

export default Dropdown;
