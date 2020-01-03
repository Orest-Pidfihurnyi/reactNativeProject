import React, { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { View, Text, ScrollView } from 'react-native';
import s from './styles';
import Touchable from '../../components/Touchable/Touchable';
import { NavigationService } from '../../services';
import colors from '../../styles/colors';
import SegmentControlSortBy from './components/SegmentControlSortBy/SegmentControlSortBy';
import PriceRangeInput from './components/PriceRangeInput/PriceRangeInput';
import SegmentedControl from '../../components/SegmentedControl/SegmentedControl';
import HeaderBackIcon from '../../components/headerBackIcon/HeaderBackIcon';
import SearchInput from '../../components/SearchInput/SearchInput';
import CustomHeader from '../../components/CustomHeader/CustomHeader';

function FilterScreen() {
  const [isFree, setIsFree] = useState(false);
  const [sortBy, setSortBy] = useState('lowest');
  const [isLocationChoosing, setIsLocationChoosing] = useState(false);
  const [sortByFree, setSortByFree] = useState('relevance');
  const [priceFrom, setPriceFrom] = useState('');
  const [priceTo, setPriceTo] = useState('');

  return (
    <ScrollView style={s.scrollView}>
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
        <Text style={s.headerTitle}>Filter</Text>
        <Touchable onPress={() => console.log('closeLocationFilter')}>
          <Text style={s.doneButtonText}>Done</Text>
        </Touchable>
      </CustomHeader>
      <View style={s.container}>
        <View style={s.filterContainer}>
          <SearchInput />
          <Touchable style={s.locationContainer}>
            <View style={s.locationLeft}>
              <MaterialIcons
                name="location-on"
                size={32}
                color={colors.primary}
              />
              <Text style={s.locationText}>Location</Text>
            </View>

            <View style={s.locationRight}>
              <Ionicons
                name="ios-arrow-forward"
                size={32}
                color={colors.primary}
              />
            </View>
          </Touchable>
          <SegmentedControl isFree={isFree} setIsFree={setIsFree} />
          <View style={s.priceRangeContainer}>
            <PriceRangeInput
              value={priceFrom}
              onChangeText={(val) => setPriceFrom(val)}
              isFrom
            />
            <PriceRangeInput
              value={priceTo}
              onChangeText={(val) => setPriceTo(val)}
            />
          </View>
          <SegmentControlSortBy
            sortBy={sortBy}
            setSortBy={setSortBy}
            isFree={isFree}
            sortByFree={sortByFree}
            setSortByFree={setSortByFree}
          />
        </View>
      </View>
    </ScrollView>
  );
}

FilterScreen.navigationOptions = () => ({
  header: null,
});

FilterScreen.propTypes = {};

export default FilterScreen;
