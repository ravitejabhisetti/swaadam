import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import * as Constants from '../common/swaadam-constants';
import { SwaadamExploreScreen, SwaadamLocationScreen } from './swaadam-screens';

export const ExploreStackNavigator = createStackNavigator({
    exploreScreen: SwaadamExploreScreen,
    locationScreen: SwaadamLocationScreen
},
    {
        initialRouteName: Constants.Explore_Screen,
        headerMode: Constants.None
    });