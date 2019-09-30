import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    SwaadamExploreScreen, SwaadamCartScreen,
    SwaadamScheduleScreen, SwaadamProfileScreen
} from './swaadam-screens';
import { ProfileStackNavigator } from './swaadam-profile-router';

export const SwaadamHome = (signedIn = false) =>  createBottomTabNavigator({
    Explore: SwaadamExploreScreen,
    Cart: SwaadamCartScreen,
    Schedule: SwaadamScheduleScreen,
    Profile: !signedIn ? ProfileStackNavigator : SwaadamProfileScreen
});