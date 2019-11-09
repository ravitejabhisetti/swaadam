import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
    SwaadamExploreScreen, SwaadamCartScreen,
    SwaadamScheduleScreen, SwaadamProfileScreen
} from './swaadam-screens';
import { ProfileStackNavigator } from './swaadam-profile-router';
import * as Constants from '../common/swaadam-constants';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ExploreStackNavigator } from './swaadam-explore-router';
import { AsyncStorage } from 'react-native';

export const SwaadamHome = (signedIn = false) => createBottomTabNavigator({
    Explore: ExploreStackNavigator,
    Cart: SwaadamCartScreen,
    Schedule: SwaadamScheduleScreen,
    Profile: !signedIn ? ProfileStackNavigator : SwaadamProfileScreen
}, {
        defaultNavigationOptions: ({ navigation, signedIn }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                if (routeName === 'Explore') {
                    return <MaterialIcon name="home-outline" color={focused ? Constants.Icon_Active : Constants.Icon_Grey} size={24} />
                } else if (routeName === 'Cart') {
                    return <FeatherIcon name="shopping-cart" color={focused ? Constants.Icon_Active : Constants.Icon_Grey} size={24} />
                } else if (routeName === 'Schedule') {
                    return <Icon name="schedule" color={focused ? Constants.Icon_Active : Constants.Icon_Grey} size={24} />
                } else if (routeName === 'Profile') {
                    return <Icon name="person-outline" color={focused ? Constants.Icon_Active : Constants.Icon_Grey} size={24} />
                }
            }
        }),
        tabBarOptions: {
            activeTintColor: Constants.Icon_Active,
            inactiveTintColor: Constants.Icon_Grey,
            labelStyle: {
                fontSize: 12,
                fontFamily: Constants.Montserrat_Medium
            }
        }
    });