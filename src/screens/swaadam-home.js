import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    SwaadamExploreScreen, SwaadamCartScreen,
    SwaadamScheduleScreen, SwaadamProfileScreen
} from './swaadam-screens';

export const SwaadamHome = createBottomTabNavigator({
    Explore: SwaadamExploreScreen,
    Cart: SwaadamCartScreen,
    Schedule: SwaadamScheduleScreen,
    Profile: SwaadamProfileScreen
});