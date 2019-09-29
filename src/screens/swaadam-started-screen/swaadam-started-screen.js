import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Styles } from './swaadam-started-screen-style';
import { SwaadamStartedButton } from '../../components/swaadam-common-components';

const logoSource = require('../../assets/images/online_food_ordering-500x500.png');

class SwaadamStartedScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={Styles.startedScreenSection}>
                <View style={Styles.logoSection}>
                    <Image style={Styles.appLogoImage} source={logoSource}></Image>
                </View>
                <View style={Styles.textSection}>
                    <View>
                        <Text style={Styles.appName}>Swaadam</Text>
                        <Text style={Styles.appDescription}>Order home cooked food from the best home-chefs around you. To your office or home. Delivered in dabbas.</Text>
                    </View>
                    <View style={Styles.startedButtonSection}>
                        <SwaadamStartedButton />
                    </View>
                </View>
            </View>
        );
    }
}

export default SwaadamStartedScreen;