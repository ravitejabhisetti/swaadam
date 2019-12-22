import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { SwaadamProfileScreen } from './swaadam-screens';
import * as Constants from '../common/swaadam-constants';

export const SignedInProfileStackNavigator = createStackNavigator({
    profileEntitiesScreen: SwaadamProfileScreen
}, {
        initialRouteName: Constants.Profile_Entities_Screen,
        headerMode: Constants.None
    }
);