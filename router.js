import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import { SwaadamStartedScreen } from './src/screens/swaadam-screens';
import { SwaadamHome } from './src/screens/swaadam-home';
import * as Constants from './src/common/swaadam-constants';

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            Started: SwaadamStartedScreen,
            Home: SwaadamHome
        },
        {
            initialRouteName: signedIn ? Constants.Swaadam_Started_screen : Constants.Swaadam_Home_Screen
        }
    )
}