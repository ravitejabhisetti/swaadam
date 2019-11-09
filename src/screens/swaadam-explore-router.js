import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import * as Constants from '../common/swaadam-constants';
import { SwaadamExploreScreen, SwaadamLocationScreen } from './swaadam-screens';
import { ProfileStackNavigator } from './swaadam-profile-router';

export const ExploreStackNavigator = createStackNavigator({
    exploreScreen: SwaadamExploreScreen,
    locationScreen: ProfileStackNavigator,
    loggedInLocationScreen: SwaadamLocationScreen,
},
    {
        initialRouteName: Constants.Explore_Screen,
        headerMode: Constants.None
    }
);

ExploreStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName;
    if (routeName === Constants.Location_Screen) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    };
}