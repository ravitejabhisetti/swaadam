import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { SwaadamProfileScreen, SwaadamUpdateDetailsScreen, SwaadamLocationScreen } from './swaadam-screens';
import * as Constants from '../common/swaadam-constants';

export const SignedInProfileStackNavigator = createStackNavigator({
    profileEntitiesScreen: SwaadamProfileScreen,
    profileUserUpdateScreen: SwaadamUpdateDetailsScreen,
    profileSavedAddressesScreen: SwaadamLocationScreen
}, {
        initialRouteName: Constants.Profile_Entities_Screen,
        headerMode: Constants.None
    }
);