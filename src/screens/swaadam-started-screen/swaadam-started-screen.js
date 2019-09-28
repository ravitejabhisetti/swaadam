import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Styles } from './swaadam-started-screen-style';


class SwaadamStartedScreen extends Component {
    render() {
        return (
            <View>
                <Text style={Styles.textColor}>Swaadam started check</Text>
            </View>
        );
    }
}

export default SwaadamStartedScreen;