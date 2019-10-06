import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { SwaadamSignInScreen, SwaadamOtpScreen, SwaadamUpdateDetailsScreen } from './swaadam-screens';
import * as Constants from '../common/swaadam-constants';

export const ProfileStackNavigator = createStackNavigator({
    userSignInScreen: SwaadamSignInScreen,
    userOtpScreen: SwaadamOtpScreen,
    userUpdateDetailsScreen: SwaadamUpdateDetailsScreen
},
    {
        initialRouteName: Constants.User_Sign_In_Screen,
        headerMode: Constants.None
    }
)

ProfileStackNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if ( routeName == 'userSignInScreen' ) {
        tabBarVisible = false
    }
    return {
        tabBarVisible
    }
}