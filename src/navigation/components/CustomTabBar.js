import React from 'react';
import T from 'prop-types';
import { BottomTabBar } from 'react-navigation-tabs';
import screens from '../screens';
import { NavigationService } from '../../services';

function CustomTabBarBottom({ ...props }) {
  function customJumpToIndex(route) {
    if (route.route.key === `Empty`) {
      NavigationService.navigate(screens.CreatePost);
    } else {
      props.jumpTo(route.route.key);
    }
  }

  return <BottomTabBar {...props} onTabPress={customJumpToIndex} />;
}

CustomTabBarBottom.propTypes = {
  jumpTo: T.func,
};

export default CustomTabBarBottom;
