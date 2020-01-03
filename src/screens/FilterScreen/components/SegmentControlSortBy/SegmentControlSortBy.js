import React from 'react';
import { View, Text } from 'react-native';
import T from 'prop-types';
import Touchable from '../../../../components/Touchable/Touchable';
import s from './styles';

function SegmentControlSortBy({
  sortBy,
  setSortBy,
  isFree,
  sortByFree,
  setSortByFree,
}) {
  return (
    <View style={s.sortByContainer}>
      <Text style={s.title}>sort by</Text>
      {isFree ? (
        <View style={s.changeCurrency}>
          <Touchable
            style={[
              s.changeCurrencyItem,
              s.freeChangeCurrencyItem,
              sortByFree === 'newest' && s.focusedCurrencyItem,
              s.leftButton,
            ]}
            onPress={() => setSortByFree('newest')}
          >
            <Text
              style={[
                s.currencyText,
                sortByFree === 'newest' && s.focusedCurrencyText,
              ]}
            >
              Newest
            </Text>
          </Touchable>
          <Touchable
            style={[
              s.changeCurrencyItem,
              s.freeChangeCurrencyItem,
              sortByFree === 'relevance' && s.focusedCurrencyItem,
              s.rightButton,
            ]}
            onPress={() => setSortByFree('relevance')}
          >
            <Text
              style={[
                s.currencyText,
                sortByFree === 'relevance' && s.focusedCurrencyText,
              ]}
            >
              Relevance
            </Text>
          </Touchable>
        </View>
      ) : (
        <View style={s.changeCurrency}>
          <Touchable
            style={[
              s.changeCurrencyItem,
              sortBy === 'lowest' && s.focusedCurrencyItem,
              s.leftButton,
            ]}
            onPress={() => setSortBy('lowest')}
          >
            <Text
              style={[
                s.currencyText,
                sortBy === 'lowest' && s.focusedCurrencyText,
              ]}
            >
              Lowest
            </Text>
          </Touchable>
          <Touchable
            style={[
              s.changeCurrencyItem,
              sortBy === 'highest' && s.focusedCurrencyItem,
              s.middleButton,
            ]}
            onPress={() => setSortBy('highest')}
          >
            <Text
              style={[
                s.currencyText,
                sortBy === 'highest' && s.focusedCurrencyText,
              ]}
            >
              Highest
            </Text>
          </Touchable>
          <Touchable
            style={[
              s.changeCurrencyItem,
              sortBy === 'newest' && s.focusedCurrencyItem,
              s.rightButton,
            ]}
            onPress={() => setSortBy('newest')}
          >
            <Text
              style={[
                s.currencyText,
                sortBy === 'newest' && s.focusedCurrencyText,
              ]}
            >
              Newest
            </Text>
          </Touchable>
        </View>
      )}
    </View>
  );
}

SegmentControlSortBy.propTypes = {
  isFree: T.bool,
  sortBy: T.string,
  setSortBy: T.func,
  sortByFree: T.string,
  setSortByFree: T.func,
};

export default SegmentControlSortBy;
